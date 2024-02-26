import {GooglePlusOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";
import {RegistrationPayload} from "@pages/login-page/api/login-api.tsx";
import {authActions} from "@pages/login-page/model/auth-slice.ts";
import {useNavigate} from "react-router-dom";

type RegFormValues = {
    email: string
    password: string
    confirm: string
}

export const RegForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const registrationHandler = (arg: RegistrationPayload) => {
        dispatch(authActions.userRegistration(arg))
            .unwrap()
            .then(() => navigate('/result/success'))
            .catch((status) => {
                status === 409 ?
                    navigate('/result/error-user-exist')
                    :
                    navigate('/result/error')
            })
    }

    return (
        <Form className={'form'} onFinish={async (values: RegFormValues) => {
            const {email, password} = values
            registrationHandler({email, password})
        }}>
            <div>
                <Form.Item rules={[{required: true, message: ""}, {type: "email", message: ""}]}
                           name={'email'}>
                    <Input data-test-id='registration-email' addonBefore='e-mail:' size={'large'}/>
                </Form.Item>

                <Form.Item
                    name={'password'}
                    rules={[{
                        required: true,
                        message: ""
                    }, {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}]}
                    help={<span style={{fontSize: '0.75rem'}}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                        </span>}
                >
                    <Input.Password data-test-id='registration-password' size={'large'}
                                    placeholder='Пароль'></Input.Password>
                </Form.Item>
                <Form.Item name={'confirm'} dependencies={['password']} rules={[
                    {
                        required: true,
                        message: 'Пароли не совпадают',
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}>
                    <Input.Password data-test-id='registration-confirm-password' size={'large'} placeholder='Повторите пароль'></Input.Password>
                </Form.Item>
            </div>

            <div>
                <Form.Item>
                    <Button data-test-id='registration-submit-button' htmlType='submit' className={'form-button'} block type={'primary'}
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
