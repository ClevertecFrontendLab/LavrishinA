import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {history, store} from '@redux/configure-store';

import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';
import {HistoryRouter} from 'redux-first-history/rr6';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginPage, MainPage} from './pages';
import {AuthForm, RegForm} from "@pages/login-page/ui/forms";
import {ResultPage} from '@pages/result-page';
import React from 'react';
import {SummaryResult} from "@pages/result-page/ui/results";


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={"/auth"}/>}/>
                    <Route path={'/auth'} element={<LoginPage/>}>
                        <Route index element={<AuthForm/>}/>
                        <Route path={'registration'} element={<RegForm/>}/>
                    </Route>
                    <Route path={'/main'} element={<MainPage/>}/>
                    <Route path={'/result/'} element={<ResultPage/>}>
                        <Route path={'error'}
                               element={<SummaryResult title="Данные не сохранились"
                                                       subTitle="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз."
                                                       status={"error"}
                                                       redirectTo={'/auth/registration'}
                                                       label={'Повторить'}
                                                       dataTestId={'registration-retry-button'}/>}/>
                        <Route path={'error-user-exist'}
                               element={<SummaryResult title="Данные не сохранились"
                                                       subTitle="Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail."
                                                       status={"error"}
                                                       redirectTo={'/auth/registration'}
                                                       label={'Назад к регистрации'}
                                                       dataTestId={'registration-back-button'}/>}/>
                        <Route path={'success'}
                               element={<SummaryResult title="Регистрация успешна"
                                                       subTitle="Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль."
                                                       status={"success"}
                                                       redirectTo={'/auth'}
                                                       label={'Войти'}
                                                       dataTestId={'registration-enter-button'}/>}/>
                        <Route path={'error-login'}
                               element={<SummaryResult title="Вход не выполнен"
                                                       subTitle="Что-то пошло не так. Попробуйте еще раз"
                                                       status={"warning"}
                                                       redirectTo={'/auth'}
                                                       label={'Повторить'}
                                                       dataTestId={'login-retry-button'}/>}/>
                    </Route>

                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
