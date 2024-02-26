import {Button, Checkbox, Form, Input, Row} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {useNavigate} from "react-router-dom";
import {RegistrationPayload} from "@pages/login-page/api/login-api.tsx";
import {authActions} from "@pages/login-page/model/auth-slice.ts";

export type AuthFormValues = {
    remember: boolean
} & RegistrationPayload

export const AuthForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const authHandler = (arg: AuthFormValues) => {
        dispatch(authActions.userAuth(arg)).unwrap().then(() => navigate('/main')).catch(() => navigate('/result/error-login'))
    }


    return (
        <Form className={'form'} initialValues={{remember: true}}
              onFinish={async (values: AuthFormValues) => {
                  authHandler(values)
              }}>
            <div>
                <Form.Item rules={[{required: true, message: ""}, {type: "email", message: ""}]}
                           name={'email'}>
                    <Input data-test-id='login-email' addonBefore='e-mail:' size={'large'}/>
                </Form.Item>

                <Form.Item
                    rules={[{required: true, message: ""}, {min: 8, message: ""}]}

                    name={'password'}>
                    <Input.Password data-test-id='login-password' size={'large'}
                                    placeholder='Пароль'></Input.Password>
                </Form.Item>
            </div>

            <Row justify={'space-between'} align={'middle'} wrap={false}>
                <Form.Item style={{marginBottom: 0}} name="remember" valuePropName="checked">
                    <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {({getFieldsValue}) => {
                        const { email} = getFieldsValue();
                        const formIsComplete = !!email;
                        return (
                            <Button disabled={!formIsComplete} data-test-id='login-forgot-button'
                                    className={'form-button'}
                                    size={'large'}
                                    type={'link'}>
                                Забыли пароль?
                            </Button>
                        );
                    }}
                </Form.Item>


            </Row>

            <div>
                <Form.Item>
                    <Button data-test-id='login-submit-button' htmlType='submit'
                            className={'form-button'} block type={'primary'}
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
