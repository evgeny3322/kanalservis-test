import React, {ReactElement} from 'react';
import {RootState} from "../../../store/store";
import {useSelector} from "react-redux";
import AuthForm from "../../Pages/AuthPage/AuthForm/AuthForm";

type RouteType= {
    children: ReactElement;
}

const PrivateRoute: React.FC<RouteType> = ({ children: Component }) => {
    const getAuth = (state: RootState) => state.auth.auth;
    const isAuth = useSelector(getAuth);
    return (
        <>{isAuth === "yes" ? Component : <AuthForm/>}</>
    );
};
export default PrivateRoute;