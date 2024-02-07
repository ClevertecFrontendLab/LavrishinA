import {Layout} from "antd";
import {NavMenu} from "@components/menu";
import {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import s from "./main-page.module.css"

const {Header, Footer, Sider, Content} = Layout;


export const MainPage = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout className={s.container}>
            <Sider className={s.sidebar}
                   width={208}
                   collapsedWidth={64}
                   trigger={collapsed ?
                       <MenuUnfoldOutlined style={{position: "absolute", top: "50%", left: "100%"}}/> :
                       <MenuFoldOutlined style={{position: "absolute", top: "50%", left: "100%"}}/>}
                   collapsible
                   collapsed={collapsed}
                   onCollapse={() => setCollapsed(!collapsed)}>
                <NavMenu isCollapsed={collapsed}/>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
