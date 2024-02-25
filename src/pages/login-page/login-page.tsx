import sprite from '@utils/sprite.svg';
import {Spin, Tabs} from 'antd';
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Loader} from "@components/loader/loader.tsx";
import {useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {authSelectors} from "@pages/login-page/model/auth-slice.ts";


export const LoginPage = () => {
    const location = useLocation()
    const isLoading = useAppSelector(authSelectors.loadingState)

    const currentTab = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)



    return (


        <div className={'auth-wrapper'}>
            <div className={'auth-background'}>
                <Spin spinning={isLoading} indicator={<Loader/>}>
                    <div className={'form-container'}>
                        <svg className={'auth-logo'}>
                            <use xlinkHref={`${sprite}#logo`}/>
                        </svg>

                        <Tabs
                            activeKey={currentTab}
                            destroyInactiveTabPane={true}
                            size={'large'}
                            items={[
                                {
                                    label: <NavLink  to={'/auth'}>Вход</NavLink>,
                                    key: "auth",
                                    children: <Outlet/>,
                                },
                                {
                                    label: <NavLink to={'registration'}>Регистрация</NavLink>,
                                    key: "registration",
                                    children: <Outlet/>,
                                },
                            ]}
                        />

                    </div>
                </Spin>
            </div>
        </div>
    );
};




