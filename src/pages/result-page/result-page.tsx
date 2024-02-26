import {Outlet, useNavigate} from "react-router-dom";
import {useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {authSelectors} from "@pages/login-page/model/auth-slice.ts";
import {useEffect} from "react";


export const ResultPage = () => {
    const navigate = useNavigate()
    const notAllowed = useAppSelector(authSelectors.notAllowed)

    useEffect(() => {
        if (notAllowed) navigate('/auth')
    }, [notAllowed, navigate]);

    return (
        <div className={'auth-wrapper'}>
            <div className={'auth-background'}>
                <Outlet/>
            </div>
        </div>
    );
};


