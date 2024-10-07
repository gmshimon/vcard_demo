import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../utilis/axios'

const initialState = {
  user: null,
  users: null,
  isLoading: false,
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,
  isCreateUserLoading: false,
  isCreateUserSuccess: false,
  isCreateUserError: false,
  isLoginWithGoogleLoading: false,
  isLoginWithGoogleSuccess: false,
  isLoginWithGoogleError: false
}

export const registerUser = createAsyncThunk('registerUser', async data=>{
    const response = await axiosInstance.post('user/register',data)
    return response.data.data
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: state => {
      state.isLoginLoading = false
      state.isLoginSuccess = false
      state.isLoadingError = false
      state.isCreateUserLoading = false
      state.isCreateUserSuccess = false
      state.isCreateUserError = false
      state.isLoginWithGoogleLoading = false
      state.isLoginWithGoogleSuccess = false
      state.isLoginWithGoogleError = false
    },
    startLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers:builder=> {
    builder
    .addCase(registerUser.pending,(state)=>{
        state.isLoginLoading = true
        state.isLoginError = false
        state.isLoginSuccess = false
    })
    .addCase(registerUser.fulfilled,(state, action)=>{
        state.isLoginLoading = false
        state.isLoginError = false
        state.isLoginSuccess = true
    })
  }
})

export const { reset, startLoading } = userSlice.actions
export default userSlice.reducer
