import {
    asyncThunkCreator,
    buildCreateSlice,
    isFulfilled,
    isPending,
    isRejected
} from "@reduxjs/toolkit";
import {authApi, RegistrationPayload} from "@pages/login-page/api/login-api.tsx";
import {AxiosError} from "axios";


const createAuthSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState = {
    isLoading: false as boolean
}

export const slice = createAuthSlice({
    name: "auth",
    initialState,
    reducers: (create) => ({
        userRegistration: create.asyncThunk(async (arg: RegistrationPayload, {rejectWithValue}) => {
            try {
               await authApi.regUser(arg)
            } catch (e) {
                const error = e as AxiosError
                return error.response?.status === 409 ? rejectWithValue(error.response?.status) : rejectWithValue(error.message)
            }

        }),
    }),
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state) => {
                state.isLoading = true
            })
            .addMatcher(isRejected, (state) => {
                state.isLoading = false
            })
            .addMatcher(isFulfilled, (state) => {
                state.isLoading = false
            })
    },
    selectors: {
        loadingState: (state) => state.isLoading
    }
})


export const authReducer = slice.reducer
export const authActions = slice.actions
export const authSelectors = slice.selectors
