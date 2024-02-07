import {CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled} from "@ant-design/icons";
import {Menu} from "antd";
import s from "./Menu.module.css"
import sprite from "../../../public/sprite.svg"

type Props = {
    isCollapsed: boolean
}
export const NavMenu = ({isCollapsed}: Props) => {
    return (
        <>
            <div  className={s.logoContainer}>
                <svg className={isCollapsed ? s.collapsedLogo : s.logo}>
                    <use xlinkHref={`${sprite}#${isCollapsed ? "collapsedlogo" : "logo"}`}/>
                </svg>
            </div>
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
        </>
    );
};

