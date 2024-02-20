import {Button, Result} from "antd";
import {Link} from "react-router-dom";

export const UserExist = () => {

    return (
        <Result
            className={"result"}
            status="error"
            title="Данные не сохранились"
            subTitle="Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail."
            extra={
                <Link to="/auth/registration">
                    <Button type="primary" key="console" size={"large"} block >
                        Назад к регистрации
                    </Button>
                </Link>
            }
        />
    );
};

