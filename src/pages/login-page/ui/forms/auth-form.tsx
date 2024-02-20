import {Button, Checkbox, Form, Input, Row} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";

export const AuthForm = () => {

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
                        <Button htmlType='submit' className={'form-button'} block type={'primary'}
                                size={'large'}>
                            Войти
                        </Button>
                    </Form.Item>
                    <Button
                        className={'form-button'}
                        block
                        type={'default'}
                        size={'large'}
                        icon={<GooglePlusOutlined/>}
                    >
                        Войти через Google
                    </Button>
                </div>
            </Form>

    );
};
