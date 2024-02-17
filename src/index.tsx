import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {history, store} from '@redux/configure-store';

import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';
import {HistoryRouter} from 'redux-first-history/rr6';
import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage, MainPage } from './pages';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/auth'}/>}/>
                    <Route path={'/auth'} element={<LoginPage/>}/>
                    <Route path={'/main'} element={<MainPage/>}/>
                    <Route path={'/result'}/>
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
