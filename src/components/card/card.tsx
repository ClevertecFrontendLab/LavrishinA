import { Button, Card, Typography } from 'antd';
import { ReactNode } from 'react';

type Props = {
    title: string;
    linkTitle: string;
    icon: ReactNode;
};

export const CardItem = ({ title, linkTitle, icon }: Props) => {
    return (
        <Card
            headStyle={{ fontSize: '16px' }}
            bodyStyle={{ textAlign: 'center' }}
            size={'small'}
            style={{ maxWidth: '328px', borderRadius: '3px' }}
            title={<Typography.Text>{title}</Typography.Text>}
        >
            <Button style={{ color: 'var(--primary-light-2)' }} type={'link'} icon={icon}>
                {linkTitle}
            </Button>
        </Card>
    );
};
