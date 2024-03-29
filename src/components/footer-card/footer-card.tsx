import { Button, Card } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const FooterCard = () => {
    return (
        <Card
            headStyle={{ padding: '10px 12px', textAlign: 'left' }}
            bodyStyle={{
                padding: '12px 0',

                display: 'flex',
                justifyContent: 'space-between',
            }}
            title={
                <div className={'footer-card-title'}>
                    <Button
                        style={{ color: 'var(--primary-light-2)', paddingLeft: 0 }}
                        size={'large'}
                        type={'link'}
                    >
                        Скачать на телефон
                    </Button>
                    <p style={{ fontSize: '14px', color: '#8C8C8C' }}>Доступно в PRO-тарифе</p>
                </div>
            }
        >
            <Button size={'small'} type={'link'} style={{ color: '#000' }} icon={<AndroidFilled />}>
                Android OS
            </Button>
            <Button size={'small'} type={'link'} style={{ color: '#000' }} icon={<AppleFilled />}>
                Apple OS
            </Button>
        </Card>
    );
};
