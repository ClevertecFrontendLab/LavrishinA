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
                    <Input addonBefore='e-mail:' size={'large'}/>
                </Form.Item>

                <Form.Item rules={[{required: true, message: ""}]} name={'password'}>
                    <Input.Password size={'large'} placeholder='Пароль'></Input.Password>
                </Form.Item>
            </div>

            <Row justify={'space-between'} align={'middle'} wrap={false}>
                <Form.Item style={{marginBottom: 0}} name="remember" valuePropName="checked">
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
