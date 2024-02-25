import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';
import {authReducer} from "@pages/login-page/model/auth-slice.ts";


const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

// const localStorageMiddleware = createListenerMiddleware();
//
// localStorageMiddleware.startListening({
//     matcher: isAnyOf(authActions.userAuth.fulfilled),
//     effect: (action, listenerApi) => {
//         localStorage.setItem("token", JSON.stringify((listenerApi.getState() as RootState).auth.token))
//     },
// });

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        auth: authReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware)
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);
