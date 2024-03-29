import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useState } from 'react';
import { Button, Layout } from 'antd';
import { NavMenu } from '@components/menu';
import { Trigger } from '@components/menu/trigger';
import { HeaderContent } from '@components/header-content';
import { MenuButton } from '@components/menu/menu-button/menu-button.tsx';
import { MainContent } from '@components/main-content';
import { CardItem } from '@components/card/card.tsx';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { FooterCard } from '@components/footer-card';

const { Header, Footer, Sider, Content } = Layout;

export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const breakpoint = useBreakpoint();

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);

    return (
        <Layout className={'wrapper'}>
            <Sider
                className={'side-bar'}
                width={`${breakpoint.xs ? 106 : 208}`}
                collapsedWidth={`${breakpoint.xs ? 0 : 64}`}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <NavMenu isCollapsed={collapsed} />
                <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler} />
                <MenuButton>{collapsed ? '' : 'Выход'}</MenuButton>
            </Sider>
            <Layout>
                <Header>
                    <HeaderContent />
                </Header>
                <Content>
                    <MainContent>
                        <CardItem
                            title={'Расписать тренировки'}
                            linkTitle={'Тренировки'}
                            icon={<HeartFilled />}
                        />
                        <CardItem
                            title={'Назначить календарь'}
                            linkTitle={'Календарь'}
                            icon={<CalendarTwoTone />}
                        />
                        <CardItem
                            title={'Заполнить профиль'}
                            linkTitle={'Профиль'}
                            icon={<IdcardOutlined />}
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
                            <FooterCard />
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;
