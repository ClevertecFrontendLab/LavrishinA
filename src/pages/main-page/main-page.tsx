import { useState } from 'react';
import { Button, Card, Layout, Typography } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { NavMenu } from '@components/menu';
import { Trigger } from '@components/menu/trigger';
import { ExitButton } from '@components/menu/exit-button';
import { HeaderContent } from '@components/header-content';
import s from './main-page.module.css';

const { Header, Footer, Sider, Content } = Layout;

export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);

    const collapseSidebarHandler = () => setCollapsed((prevState) => !prevState);
    console.log('render');
    return (
        <Layout className={s.wrapper}>
            <Sider width={208} collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
                <NavMenu isCollapsed={collapsed} />
                <Trigger isCollapsed={collapsed} onTrigger={collapseSidebarHandler} />
                <ExitButton>{collapsed ? '' : 'Выход'}</ExitButton>
            </Sider>
            <Layout>
                <Header>
                    <HeaderContent />
                </Header>
                <Content>
                    <div className={s.cards}>
                        <Card
                            headStyle={{ textAlign: 'center', fontSize: '16px' }}
                            bodyStyle={{ textAlign: 'center' }}
                            size={'small'}
                            style={{ width: '240px' }}
                            title={<Typography.Text>Расписать тренировки</Typography.Text>}
                        >
                            <Button
                                style={{ color: '#2F54EB' }}
                                type={'link'}
                                icon={<HeartFilled />}
                            >
                                Тренировки
                            </Button>
                        </Card>
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;
