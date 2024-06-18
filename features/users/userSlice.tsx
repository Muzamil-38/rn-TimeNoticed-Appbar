import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../src/store/storeConfig';
import axios from 'axios';

// Define a type for the user data
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

// Define a type for the slice state
interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

// Create async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/users');
  return response.data;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // You can add any synchronous reducers if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        // Add users to the state array
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectAllUsers = (state: RootState) => state.users.users;

export default userSlice.reducer;
