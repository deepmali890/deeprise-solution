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
            return rejectWithValue(error.response?.data || { field: "general", message: "Registration failed" })
        }
    }
)


// Login user
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/api/auth/user/login', credentials);
            console.log('loginUser', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { field: "general", message: "Login failed" });
        }
    }
);


// Current user
export const fatchCurrentUser = createAsyncThunk(
    'auth/fatchCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/api/auth/user/current')
            console.log('fatchCurrentUser', data)
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data || { field: "general", message: "No active session" })
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
            return rejectWithValue(error.response?.data || { field: "general", message: "Logout failed" })
        }
    }
)


export const updateProfile = createAsyncThunk(
    'auth/updateProfile',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.put('/api/auth/user/edit-profile', formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
            console.log('updateProfile', data)
            return data

        } catch (error) {
            return rejectWithValue(error.response?.data || { field: "general", message: "Update profile failed" })
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        initialLoad: true,
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
                state.loading = false;
                state.error = action.payload;
            })

            // current user
            .addCase(fatchCurrentUser.pending, (state) => {
                state.initialLoad = true;
            })
            .addCase(fatchCurrentUser.fulfilled, (state, action) => {
                state.initialLoad = false;
                state.user = action.payload
            })
            .addCase(fatchCurrentUser.rejected, (state, action) => {
                state.initialLoad = false;
                state.user = null;
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

            // update profile
            .addCase(updateProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default authSlice.reducer
