import s from "./trigger.module.css"
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

type Props = {
    isCollapsed: boolean
}

export const Trigger = ({isCollapsed}: Props) => {

    return (
        <div className={s.trigger}>
            {isCollapsed ?
                <MenuUnfoldOutlined /> :
                <MenuFoldOutlined />}
        </div>
    );
};

