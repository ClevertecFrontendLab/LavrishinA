import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

export const HeaderContent = () => {
    const breakpoints = useBreakpoint();
    return (
        <div className={'header'}>
            <p className={'breadcrumb'}>Главная</p>

            <h1 className={'title'}>
                <p>Приветствуем тебя в CleverFit — приложении,</p>
                <p>которое поможет тебе добиться своей мечты!</p>
            </h1>

            {breakpoints.xs ? (
                <Button shape='circle' icon={<SettingOutlined />}></Button>
            ) : (
                <Button
                    style={{ justifySelf: 'end' }}
                    icon={<SettingOutlined />}
                    type={'text'}
                    size={'small'}
                >
                    Настройки
                </Button>
            )}
        </div>
    );
};
