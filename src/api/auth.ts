import * as WebBrowser from 'expo-web-browser';

const REDIRECT_URI = 'swifty-companion://oauth';

export const authenticateWith42 = async () => {
  try {
    const state = Math.random().toString(36).substring(2, 15);
    const authUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.EXPO_PUBLIC_CLIENT_UID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=public profile&state=${state}`;

    const result = await WebBrowser.openAuthSessionAsync(authUrl, REDIRECT_URI);

    if (result.type === 'success') {
      const url = result.url;
      const urlParams = new URLSearchParams(url.split('?')[1] || url.split('#')[1]);
      const code = urlParams.get('code');
      const returnedState = urlParams.get('state');

      if (returnedState !== state) {
        throw new Error('State mismatch - possible security issue');
      }

      if (code) {
        return { code, redirectUri: REDIRECT_URI };
      } else {
        throw new Error('No authorization code received');
      }
    } else if (result.type === 'cancel') {
      throw new Error('OAuth flow was cancelled');
    } else {
      throw new Error('OAuth flow failed');
    }
  } catch (error) {
    throw error;
  }
};
