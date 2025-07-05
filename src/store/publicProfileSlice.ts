import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPublicUserProfile } from '../../src/api/publicProfile';
import { UserProfile } from '../../src/types/userProfile';

export const fetchProfileByLogin = createAsyncThunk<UserProfile, string, { rejectValue: string }>(
  'publicProfile/fetchByLogin',
  async (login, { rejectWithValue }) => {
    try {
      const userProfile = await fetchPublicUserProfile(login);
      return userProfile;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to load profile');
    }
  }
);

const publicProfileSlice = createSlice({
  name: 'publicProfile',
  initialState: {
    userProfile: null as UserProfile | null,
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileByLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileByLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchProfileByLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default publicProfileSlice.reducer;
