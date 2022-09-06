import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import {RootState} from "../../../store/store";
import AuthForm from "./AuthForm/AuthForm";

const AuthPage = () => {
  const getAuth = (state: RootState) => state.auth.auth;
  const isAuth: string = useSelector(getAuth);

  return (
    <>
      {isAuth === 'yes' ? (
        <Navigate to={"/home"} />
      ) : (
        <AuthForm />
      )}
    </>
  );
};

export default AuthPage;
