import { TokenResponse } from '../types/tokenResponse';
import { UserProfile } from '../types/userProfile';

export const exchangeCodeForToken = async (authCode: string, redirectUri: string): Promise<string> => {
  try {
    const response = await fetch('https://api.intra.42.fr/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.EXPO_PUBLIC_CLIENT_UID || '',
        client_secret: process.env.EXPO_PUBLIC_CLIENT_SECRET || '',
        code: authCode,
        redirect_uri: redirectUri,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Failed to exchange code for token: ${response.status}`);
    }

    const tokenData: TokenResponse = await response.json();
    return tokenData.access_token;
  } catch (error) {
    throw new Error(`Token exchange failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const fetchUserProfile = async (token: string): Promise<UserProfile> => {
  try {
    console.log("Fetching user profile with token:", token);
    const response = await fetch('https://api.intra.42.fr/v2/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.status}`);
    }

    const userData: UserProfile = await response.json();
    return userData;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
