import {CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled} from "@ant-design/icons";
import s from "./Menu.module.css"
import {Menu} from "antd";

export const NavMenu = () => {
    return (
        <Menu
            className={s.menu}
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <CalendarOutlined style={{color: "#120338"}}/>,
                    label: 'Календарь',
                },
                {
                    key: '2',
                    icon: <HeartFilled style={{color: "#120338"}}/>,
                    label: 'Тренировки',
                },
                {
                    key: '3',
                    icon: <TrophyFilled style={{color: "#120338"}}/>,
                    label: 'Достижения',
                },
                {
                    key: '4',
                    icon: <IdcardOutlined style={{color: "#120338"}}/>,
                    label: "Профиль"
                }
            ]}
        />
    );
};

