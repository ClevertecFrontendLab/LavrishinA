import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import s from './trigger.module.css';

type Props = {
    isCollapsed: boolean;
    onTrigger: () => void;
};

export const Trigger = ({ isCollapsed, onTrigger }: Props) => {
    return (
        <div className={s.trigger} onClick={onTrigger}>
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};
