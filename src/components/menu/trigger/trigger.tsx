import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

type Props = {
    isCollapsed: boolean;
    onTrigger: () => void;
};

export const Trigger = ({ isCollapsed, onTrigger }: Props) => {
    const breakpoints = useBreakpoint();
    return (
        <div
            className={'trigger'}
            onClick={onTrigger}
            data-test-id={breakpoints.md ? 'sider-switch' : 'sider-switch-mobile'}
        >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};
