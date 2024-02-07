import {CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled} from "@ant-design/icons";
import s from "./Menu.module.css"
import {Menu} from "antd";

type Props = {
    isCollapsed: boolean
}
export const NavMenu = ({isCollapsed}: Props) => {
    return (
        <Menu
            mode={"vertical"}
            className={`${s.menu} ${isCollapsed ? s.collapsed : ""}`}
            items={[
                {
                    key: '1',
                    icon: <CalendarOutlined style={{color: "#120338"}}/>,
                    label: "Календарь",
                    title: ""
                },
                {
                    key: '2',
                    icon: <HeartFilled style={{color: "#120338"}}/>,
                    label: "Тренировки",
                    title: ""
                },
                {
                    key: '3',
                    icon: <TrophyFilled style={{color: "#120338"}}/>,
                    label: "Достижения",
                    title: ""

                },
                {
                    key: '4',
                    icon: <IdcardOutlined style={{color: "#120338"}}/>,
                    label: "Профиль",
                    title: ""
                }
            ]}
        />
    );
};

