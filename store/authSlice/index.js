import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { AuthServise } from '@/services';

const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await AuthServise.login(body);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const response = await AuthServise.register(body);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthServise.logout();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      await AuthServise.checkAuth();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      const { data } = action.payload;

      localStorage.setItem('token', data.acessToken);

      state.loading = false;
      state.error = null;
      state.isAuth = true;
      state.user = data.user;
    },

    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      const { data } = action.payload;

      localStorage.setItem('token', data.acessToken);

      state.loading = false;
      state.error = null;
      state.isAuth = true;
      state.user = data.user;
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state) => {
      localStorage.removeItem('token');

      state.loading = false;
      state.error = null;
      state.isAuth = true;
      state.user = null;
    },
    [checkAuth.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
    [checkAuth.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [checkAuth.fulfilled]: (state) => {
      state.loading = false;
      state.isAuth = true;
    },
  },
});

export { login, register, logout, checkAuth };
export default authSlice.reducer;
