/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../utilis/axios'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from '../../Firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth/web-extension'

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

export const saveUserData = async userData => {
  const response = await axiosInstance.post('/user', userData)
  const data = response.data.data
  const tokenExpiration = new Date().getTime() + 3 * 60 * 60 * 1000 // 8 hours from now
  localStorage.setItem(
    'userToken',
    JSON.stringify({
      access_token: response.data.token,
      expiration: tokenExpiration
    })
  )
  return data
}

export const loginUser = createAsyncThunk(
  'loginUser',
  async ({ email, password }) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    const data = await saveUserData({
      name: res?.user?.displayName,
      email: res?.user?.email
    })
    return data
  }
)

export const createUser = createAsyncThunk(
  'createUser',
  async ({ name, email, password }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const result = updateProfile(auth.currentUser, {
      displayName: name
    })
    const data = await saveUserData({
      name: result?.user?.displayName,
      email: result?.user?.email
    })
    return data
  }
)

export const loginWithGoogle = createAsyncThunk('loginWithGoogle', async () => {
  const provider = new GoogleAuthProvider()
  const response = await signInWithPopup(auth, provider)
  const data = await saveUserData({
    name: response?.user?.displayName,
    email: response?.user?.email
  })
  return data
})

export const logOut = createAsyncThunk('logOut', async () => {
  const response = await signOut(auth)
  localStorage.removeItem('userToken')
  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: state => {
      state.isLoginLoading = false
      state.isLoginSuccess = false
      state.isLoginError = false
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
    .addCase(loginUser.pending, state => {
      state.isLoginLoading = true
      state.isLoginError = false
      state.isLoginSuccess = false
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLoginLoading = false
      state.isLoginSuccess = true
      state.isLoginError = false
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoginLoading = false
      state.isLoginError = true
      state.isLoginSuccess = false
    })
    .addCase(createUser.pending,(state)=>{
        state.isLoginLoading = true
        state.isLoginError = false
        state.isLoginSuccess = false
    })
    .addCase(createUser.fulfilled,(state, action)=>{
        state.isLoginLoading = false
        state.isLoginError = false
        state.isLoginSuccess = true
        state.user = action.payload
    })
    .addCase(createUser.rejected,(state, action)=>{
        state.isLoginLoading = false
        state.isLoginError = true
        state.isLoginSuccess = false
    })
    .addCase(logOut.fulfilled, (state, action) => {
      state.user = null
    })
    .addCase(logOut.rejected, (state, action) => {
    })
    .addCase(loginWithGoogle.pending, state => {
      state.isLoginWithGoogleLoading = true
      state.isLoginWithGoogleError = false
      state.isLoginWithGoogleSuccess = false
    })
    .addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLoginWithGoogleLoading = false
      state.isLoginWithGoogleSuccess = true
      state.isLoginWithGoogleError = false
    })
    .addCase(loginWithGoogle.rejected, (state, action) => {
      state.isLoginWithGoogleLoading = false
      state.isLoginWithGoogleError = true
      state.isLoginWithGoogleSuccess = false
    })
  }
})

export const { reset, startLoading } = userSlice.actions
export default userSlice.reducer
