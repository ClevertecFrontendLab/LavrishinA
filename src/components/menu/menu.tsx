import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { MaxLogo, MinLogo } from '@components/menu/logo';
import { Menu } from 'antd';

type Props = {
    isCollapsed: boolean;
};
export const NavMenu = ({ isCollapsed }: Props) => {
    return (
        <>
            {isCollapsed ? <MinLogo /> : <MaxLogo />}
            <Menu
                mode={'vertical'}
                items={[
                    {
                        key: '1',
                        icon: <CalendarOutlined style={{ color: '#120338' }} />,
                        label: 'Календарь',
                    },
                    {
                        key: '2',
                        icon: <HeartFilled style={{ color: '#120338' }} />,
                        label: 'Тренировки',
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled style={{ color: '#120338' }} />,
                        label: 'Достижения',
                    },
                    {
                        key: '4',
                        icon: <IdcardOutlined style={{ color: '#120338' }} />,
                        label: 'Профиль',
                    },
                ]}
            />
        </>
    );
};
