import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import s from './header-content.module.css';

export const HeaderContent = () => {
    return (
        <div className={s.header}>
            <p className={s.breadcrumb}>Главная</p>

            <h1 className={s.title}>
                <p>Приветствуем тебя в CleverFit — приложении,</p>
                <p>которое поможет тебе добиться своей мечты!</p>
            </h1>

            <Button
                style={{ justifySelf: 'end' }}
                icon={<SettingOutlined />}
                type={'text'}
                size={'small'}
            >
                Настройки
            </Button>
        </div>
    );
};
