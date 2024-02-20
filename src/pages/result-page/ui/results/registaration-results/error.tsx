import React from 'react';
import {Link} from "react-router-dom";
import {Button, Result} from "antd";

export const Error = () => {
    return (
        <Result
            className={"result"}
            status="error"
            title="Данные не сохранились"
            subTitle="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз."
            extra={
                <Link to="/auth/error">
                    <Button type="primary" key="console" size={"large"} block >
                        Назад к регистрации
                    </Button>
                </Link>
            }
            />
    );
};

