import { useState } from 'react';
import { Layout } from 'antd';
import { NavMenu } from '@components/menu';
import { Trigger } from '@components/menu/trigger';
import { ExitButton } from '@components/menu/exit-button';
import { HeaderContent } from '@components/header-content';
import s from './main-page.module.css';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const { Header, Footer, Sider, Content } = Layout;

export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const breakpoint = useBreakpoint();

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);

    return (
        <Layout className={s.wrapper}>
            <Sider
                width={`${breakpoint.xs ? 106 : 208}`}
                collapsedWidth={`${breakpoint.xs ? 0 : 64}`}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <NavMenu isCollapsed={collapsed} />
                <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler} />
                <ExitButton>{collapsed ? '' : 'Выход'}</ExitButton>
            </Sider>
            <Layout>
                <Header>
                    <HeaderContent />
                </Header>
                <Content></Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;
