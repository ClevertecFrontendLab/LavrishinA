import {Link} from "react-router-dom";
import {Button, Result} from "antd";

export const Success = () => {
    return (
        <Result
            className={"result"}
            status="success"
            title="Регистрация успешна"
            subTitle="Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль."
            extra={
                <Link to="/auth">
                    <Button type="primary" key="console" size={"large"} block>
                        Войти
                    </Button>
                </Link>
            }
        />
    );
};

