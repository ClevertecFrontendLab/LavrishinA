import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";



export const ResultPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(!location.state?.isRedirected) navigate('/')
    }, [location.state?.isRedirected, navigate]);
    return (
        <div className={'auth-wrapper'}>
            <div className={'auth-background'}>
                <Outlet/>
            </div>
        </div>
    );
};



