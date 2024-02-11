import { Button } from 'antd';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import sprite from '@utils/sprite.svg';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export const MenuButton = ({ children }: Props) => {
    return (
        <Button
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
