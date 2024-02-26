import { Button } from 'antd';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import sprite from '@utils/sprite.svg';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    onClick?: () => void
};


export const MenuButton = ({ children, onClick}: Props) => {
    return (
        <Button
            onClick={onClick}
            block
            style={{ position: 'absolute', textAlign: 'start' }}
            type={'default'}
            size={'large'}
            className={'menu-button'}
            icon={<ExitIcon className={'icon'} />}
        >
            {children}
        </Button>
    );
};

const ExitSvg = () => (
    <svg width={16} height={16}>
        <use xlinkHref={`${sprite}#exit`} />
    </svg>
);

const ExitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ExitSvg} {...props} />
);
