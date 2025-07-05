import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchEventsByCampus, registerForEvent } from '../api/events';
import { Event } from '../types/event';

interface FetchEventsPayload {
  token: string;
  campusId: number;
}

export const fetchEvents = createAsyncThunk<Event[], FetchEventsPayload, { rejectValue: string }>(  'events/fetchEvents',
  async ({ token, campusId }, { rejectWithValue }) => {
    try {
      const events = await fetchEventsByCampus(token, campusId);
      return events;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to load events');
    }
  }
);

interface RegisterForEventPayload {
  token: string;
  eventId: number;
  userId: number;
}

export const registerForEventThunk = createAsyncThunk<void, RegisterForEventPayload, { rejectValue: string }>(
  'events/registerForEvent',
  async ({ token, eventId, userId }, { rejectWithValue }) => {
    try {
      await registerForEvent(token, eventId, userId);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to register for event');
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [] as Event[],
    isLoading: false,
    error: null as string | null,
    isRegistering: false,
    registrationError: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(registerForEventThunk.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
      })
      .addCase(registerForEventThunk.fulfilled, (state) => {
        state.isRegistering = false;
      })
      .addCase(registerForEventThunk.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.payload as string;
      });
  },
});

export default eventsSlice.reducer;
