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
            headStyle={{ textAlign: 'center', fontSize: '16px' }}
            bodyStyle={{ textAlign: 'center' }}
            size={'small'}
            style={{ width: '240px' }}
            title={<Typography.Text>{title}</Typography.Text>}
        >
            <Button style={{ color: '#2F54EB' }} type={'link'} icon={icon}>
                {linkTitle}
            </Button>
        </Card>
    );
};
