import { Layout } from 'antd';
import { NavMenu } from '@components/menu';
import { useState } from 'react';

import s from './main-page.module.css';
import { Trigger } from '@components/menu/trigger';
import { ExitButton } from '@components/menu/exit-button/exit-button';

const { Header, Footer, Sider, Content } = Layout;

export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);
    return (
        <Layout className={s.container}>
            <Sider width={208} collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
                <NavMenu isCollapsed={collapsed} />
                <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler} />
                <ExitButton>{collapsed ? '' : 'Выход'}</ExitButton>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
