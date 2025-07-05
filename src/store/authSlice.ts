import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authenticateWith42 } from '../api/auth';

export const login = createAsyncThunk('auth/login', async (_, { rejectWithValue }) => {
  try {
    const { code, redirectUri } = await authenticateWith42();
    return { code, redirectUri };
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'OAuth flow failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null as string | null,
    isLoading: false,
    error: null as string | null,
    authCode: null as string | null,
    redirectUri: null as string | null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authCode = action.payload.code;
        state.redirectUri = action.payload.redirectUri;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
