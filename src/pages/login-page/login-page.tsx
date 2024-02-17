import sprite from '@utils/sprite.svg';
import {Button, Checkbox, Form, Input, Row, Tabs} from 'antd';
import {GooglePlusOutlined} from '@ant-design/icons';

export const LoginPage = () => {
    return (
        <div className={'auth-wrapper'}>
            <div className={'auth-background'}>
                <div className={'form-container'}>
                    <svg className={'auth-logo'}>
                        <use xlinkHref={`${sprite}#logo`}/>
                    </svg>
                    <Tabs
                        size={'large'}
                        items={[
                            {
                                label: `Вход`,
                                key: '1',
                                children: <AuthForm/>,
                            },
                            {
                                label: `Регистрация`,
                                key: '2',
                                children: <RegForm/>,
                            },
                        ]}
                    />
                </div>
            </div>

        </div>
    );
};

const AuthForm = () => {
    return (
        <Form className={'form'}>
            <div>
                <Form.Item rules={[{required: true, message: ""}, {type: "email", message: ""}]}
                           name={'email'}>
                    <Input addonBefore='e-mail:' size={'large'}/>
                </Form.Item>

                <Form.Item rules={[{required: true, message: ""}]} name={'password'}>
                    <Input.Password size={'large'} placeholder='Пароль'></Input.Password>
                </Form.Item>
            </div>

            <Row justify={'space-between'} align={'middle'} wrap={false}>
                <Form.Item style={{marginBottom: 0}}>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button className={'form-button'} size={'large'} type={'link'}>
                    Забыли пароль?
                </Button>
            </Row>

            <div>
                <Form.Item>
                    <Button className={'form-button'} block type={'primary'} size={'large'}>
                        Войти
                    </Button>
                </Form.Item>
                <Button
                    className={'form-button'}
                    block
                    type={'default'}
                    size={'large'}
                    icon={<GooglePlusOutlined/>}
                    htmlType='submit'
                >
                    Войти через Google
                </Button>
            </div>
        </Form>
    );
};

const RegForm = () => {
    return (
        <Form className={'form'}>
            <div>
                <Form.Item rules={[{required: true, message: ""}, {type: "email", message: ""}]}
                           name={'email'}>
                    <Input addonBefore='e-mail:' size={'large'}/>
                </Form.Item>

                <Form.Item
                    name={'password'}
                    rules={[{required: true, message: ""}, {pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/, message: <span style={{fontSize: '0.75rem'}}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                        </span>}]}
                    help={<span style={{fontSize: '0.75rem'}}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                        </span>}
                >
                    <Input.Password size={'large'} placeholder='Пароль'></Input.Password>
                </Form.Item>
                <Form.Item name={'confirm'} dependencies={['password']}  rules={[
                    {
                        required: true,
                        message: '',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error(''));
                        },
                    }),
                ]}>
                    <Input.Password size={'large'} placeholder='Повторите пароль'></Input.Password>
                </Form.Item>
            </div>

            <div>
                <Form.Item>
                    <Button className={'form-button'} block type={'primary'} size={'large'}>
                        Войти
                    </Button>
                </Form.Item>
                <Button
                    className={'form-button'}
                    block
                    type={'default'}
                    size={'large'}
                    icon={<GooglePlusOutlined/>}
                    htmlType='submit'
                >
                    Войти через Google
                </Button>
            </div>
        </Form>
    );
};
