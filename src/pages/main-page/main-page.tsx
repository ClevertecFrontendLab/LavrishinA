import {Layout} from "antd";
import s from "./main-page.module.css"
import {NavMenu} from "@components/menu";






const {Header, Footer, Sider, Content} = Layout;


export const MainPage = () => {


    return (
        <Layout className={s.container}>
            <Sider>
               <NavMenu/>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
