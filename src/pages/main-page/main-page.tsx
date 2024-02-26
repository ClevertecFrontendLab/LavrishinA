import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import {useEffect, useState} from 'react';
import {Button, Layout, Spin} from 'antd';
import {NavMenu} from '@components/menu';
import {Trigger} from '@components/menu/trigger';
import {HeaderContent} from '@components/header-content';
import {MenuButton} from '@components/menu/menu-button/menu-button.tsx';
import {MainContent} from '@components/main-content';
import {CardItem} from '@components/card/card.tsx';
import {CalendarTwoTone, HeartFilled, IdcardOutlined} from '@ant-design/icons';
import {FooterCard} from '@components/footer-card';
import {Loader} from "@components/loader/loader.tsx";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {authActions, authSelectors} from "@pages/login-page/model/auth-slice.ts";
import {useNavigate} from "react-router-dom";


const {Header, Footer, Sider, Content} = Layout;

export const MainPage = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(true);
    const breakpoint = useBreakpoint();
    const isLoading = useAppSelector(authSelectors.loadingState)
    const isAuth = useAppSelector(authSelectors.isAuth)
    const dispatch = useAppDispatch()

    useEffect(() => {

        if (isAuth) return
        dispatch(authActions.initialize()).unwrap().catch(() => navigate('/auth'))
    }, [dispatch, isAuth, navigate]);

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);
    const logoutHandler = () => dispatch(authActions.userLogout(undefined))

    return (
        <Spin data-test-id='loader' spinning={isLoading} indicator={<Loader/>}>
            <Layout className={'wrapper'}>
                <Sider
                    className={'side-bar'}
                    width={`${breakpoint.xs ? 106 : 208}`}
                    collapsedWidth={`${breakpoint.xs ? 0 : 64}`}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <NavMenu isCollapsed={collapsed}/>
                    <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler}/>
                    <MenuButton onClick={logoutHandler}>{collapsed ? '' : 'Выход'}</MenuButton>
                </Sider>
                <Layout>
                    <Header>
                        <HeaderContent/>
                    </Header>
                    <Content>
                        <MainContent>
                            <CardItem
                                title={'Расписать тренировки'}
                                linkTitle={'Тренировки'}
                                icon={<HeartFilled/>}
                            />
                            <CardItem
                                title={'Назначить календарь'}
                                linkTitle={'Календарь'}
                                icon={<CalendarTwoTone/>}
                            />
                            <CardItem
                                title={'Заполнить профиль'}
                                linkTitle={'Профиль'}
                                icon={<IdcardOutlined/>}
                            />
                        </MainContent>
                    </Content>
                    <Footer>
                        <div className={'footer-container'}>
                            <div>
                                <Button type={'link'} size={'large'}>
                                    Смотреть отзывы
                                </Button>
                            </div>

                            <div className={'footer-card'}>
                                <FooterCard/>
                            </div>
                        </div>
                    </Footer>
                </Layout>
            </Layout>
        </Spin>
    );
};

