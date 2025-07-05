import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { exchangeCodeForToken, fetchUserProfile } from '../api/user';
import { UserProfile } from '../types/userProfile';
import { setToken } from './authSlice';

interface FetchUserPayload {
  code: string;
  redirect_uri: string;
}

export const fetchUser = createAsyncThunk<UserProfile, FetchUserPayload, { rejectValue: string }>(
  'user/fetchUser',
  async ({ code, redirect_uri }, { dispatch, rejectWithValue }) => {
    try {
      const token = await exchangeCodeForToken(code, redirect_uri);
      dispatch(setToken(token));
      const userProfile = await fetchUserProfile(token);
      return userProfile;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to load profile');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: null as UserProfile | null,
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
