import {
    asyncThunkCreator,
    buildCreateSlice,
    isFulfilled,
    isPending,
    isRejected,
    PayloadAction
} from "@reduxjs/toolkit";
import {authApi, RegistrationPayload} from "@pages/login-page/api/login-api.tsx";
import {isAxiosError} from "axios";
import {AuthFormValues} from "@pages/login-page/ui/forms/auth-form.tsx";
import {asyncLocalStorage} from "@utils/async-localstoreage.tsx";



const createAuthSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState = {
    isLoading: false as boolean,
    notAllowed: true as boolean,
    isAuthorized: false as boolean
}

export const slice = createAuthSlice({
    name: "auth",
    initialState,
    reducers: (create) => ({
        userRegistration: create.asyncThunk(async (arg: RegistrationPayload, {rejectWithValue}) => {
            try {
                await authApi.regUser(arg)
            } catch (error) {
                if (isAxiosError(error)) {
                    return error.response?.status === 409 ? rejectWithValue(error.response?.status) : rejectWithValue(error.message)
                } else {
                    throw new Error("Some error occurred")
                }
            }

        }),
        userAuth: create.asyncThunk(async (arg: AuthFormValues, {rejectWithValue}) => {
                const {email, password, remember} = arg
                try {
                    const res = await authApi.authUser({email, password})
                    if (remember) {
                        await asyncLocalStorage.setItem("token", JSON.stringify(res.data.accessToken))
                    }
                } catch (error) {
                    if (isAxiosError(error)) {
                        return rejectWithValue(null)
                    } else {
                        throw new Error("Some error occurred")
                    }
                }
            },
            {
                fulfilled: (state) => {
                    state.isAuthorized = true
                }
            }
        ),
        userLogout: create.asyncThunk(async () => {
            await asyncLocalStorage.removeItem("token")
        }, {
            fulfilled: (state) => {
                state.isAuthorized = false
            }
        }),
        initialize: create.asyncThunk(async (_arg: undefined, {rejectWithValue}) => {
            try {
                const token = await asyncLocalStorage.getItem("token")
                if (token) return true
                return rejectWithValue(null)
            } catch (e) {
                return rejectWithValue(null)
            }
        }),
        accessControl: create.reducer((state, action: PayloadAction<boolean>) => {
            state.notAllowed = action.payload
        })
    }),
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(isRejected, (state) => {
                state.isLoading = false
                state.notAllowed = false
            })
            .addMatcher(isFulfilled, (state) => {
                state.isLoading = false
                state.notAllowed = false
            })
    },
    selectors: {
        loadingState: (state) => state.isLoading,
        notAllowed: (state) => state.notAllowed,
        isAuth: (state) => state.isAuthorized
    }
})


export const authReducer = slice.reducer
export const authActions = slice.actions
export const authSelectors = slice.selectors
