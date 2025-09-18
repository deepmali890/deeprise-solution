import axiosInstance from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Register user
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/api/auth/user/register', userData)
            console.log('registerUser', data)
            return data

        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Registration failed')
        }
    }
)


// Login user
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/api/auth/user/login', credentials)
            console.log('loginUser', data)
            return data

        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed')
        }
    }
)

// Current user
export const fatchCurrentUser = createAsyncThunk(
    'auth/fatchCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/api/auth/user/current')
            console.log('fatchCurrentUser', data)
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Current user failed')
        }
    }
)

export const logouedOutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/api/auth/user/logout')
            console.log('logouedOutUser', data)
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Logout failed')
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // signup
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //login
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                const message = action.payload || "Login failed";
                state.error = message;
            })

            // current user
            .addCase(fatchCurrentUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fatchCurrentUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(fatchCurrentUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // logout
            .addCase(logouedOutUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(logouedOutUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = null
            })
            .addCase(logouedOutUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default authSlice.reducer
