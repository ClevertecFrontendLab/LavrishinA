import { Button, Layout } from 'antd';
import { NavMenu } from '@components/menu';
import { useState } from 'react';
import { Trigger } from '@components/menu/trigger';
import { ExitButton } from '@components/menu/exit-button';
import s from './main-page.module.css';
import { SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);

    return (
        <Layout className={s.wrapper}>
            <Sider width={208} collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
                <NavMenu isCollapsed={collapsed} />
                <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler} />
                <ExitButton>{collapsed ? '' : 'Выход'}</ExitButton>
            </Sider>
            <Layout>
                <Header>
                    <div className={s.header}>
                        <p className={s.breadcrumb}>Главная</p>
                        <h1 className={s.title}>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </h1>

                        <Button
                            style={{ justifySelf: 'end' }}
                            type={'text'}
                            icon={<SettingOutlined />}
                        >
                            Настройки
                        </Button>
                    </div>
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
