import * as SecureStore from 'expo-secure-store';
import { TokenResponse } from '../types/tokenResponse';
import { UserProfile } from '../types/userProfile';

const getAccessToken = async (): Promise<string> => {
  let tokenInfo: TokenResponse | null = null;
  try {
    const storedTokenInfo = await SecureStore.getItemAsync('tokenInfo');
    if (storedTokenInfo) {
      tokenInfo = JSON.parse(storedTokenInfo);
    }

    if (tokenInfo && (tokenInfo.created_at + tokenInfo.expires_in) > (Date.now() / 1000)) {
      return tokenInfo.access_token;
    }

    const response = await fetch('https://api.intra.42.fr/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.EXPO_PUBLIC_CLIENT_UID || '',
        client_secret: process.env.EXPO_PUBLIC_CLIENT_SECRET || '',
      }).toString(),
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`404 : Not found`);
      }
      if (response.status === 403) {
        throw new Error('Access forbidden: Invalid or expired token');
      }
      if (response.status === 500) {
        throw new Error('Internal Server Error: Please try again later');
      }
      throw new Error(`Failed to get access token: ${response.status}`);
    }

    const tokenData: TokenResponse = await response.json();
    await SecureStore.setItemAsync('tokenInfo', JSON.stringify(tokenData));
    return tokenData.access_token;
  } catch (error) {
    throw new Error(`Token request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const fetchPublicUserProfile = async (userLogin: string): Promise<UserProfile> => {
  try {
    const token = await getAccessToken();

    const response = await fetch(`https://api.intra.42.fr/v2/users/${userLogin}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`User '${userLogin}' not found`);
      }
      if (response.status === 403) {
        throw new Error('Access forbidden: Invalid or expired token');
      }
      if (response.status === 500) {
        throw new Error('Internal Server Error: Please try again later');
      }
      throw new Error(`Failed to fetch user data: ${response.status}`);
    }

    const userData: UserProfile = await response.json();
    return userData;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};