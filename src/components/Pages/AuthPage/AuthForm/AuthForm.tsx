import React from 'react';
import styled from "styled-components";
import {RootState, useAppDispatch, useAppSelector} from "../../../../store/store";
import {changeInputLogin, changeInputPassword} from "../../../../store/reducers/auth-reducer";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

const Form = styled.form`
  padding: 20px 10px 10px 10px;
  text-align: center;
  color: #27569c;
  width: 440px;
  font-weight: 800;
  margin: 100px auto;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 5px solid #27569c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media ${(props) => props.theme.phone} {
    width: 90%;
    margin: 50px auto;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 24px;
  gap: 10px;
  color: black;
  vertical-align: middle;
  @media ${(props) => props.theme.phone} {
    flex-direction: column;
    text-align: left;
  }
`;


const AuthForm = () => {
    const dispatch = useAppDispatch();
    const getAuth = (state: RootState) => state.auth.auth;
    const getLogin = (state: RootState) => state.auth.inputLogin;
    const getPassword = (state: RootState) => state.auth.inputPassword;

    const loginValue: string | undefined = useAppSelector(getLogin);
    const isAuth: string = useAppSelector(getAuth);
    const passwordValue: string | undefined = useAppSelector(getPassword);

    const handleChangeLogin = (e: { target: { value: string; }; }) => {
        dispatch(changeInputLogin(e.target.value));
    };

    const handleChangePassword = (e: { target: { value: string; }; }) => {
        dispatch(changeInputPassword(e.target.value));
    };

    return (
        <Form>
            Autorization
            <Label>
                login
                <Input
                    handleChange={handleChangeLogin}
                    value={loginValue}
                    color={isAuth !== 'no' ? "#27569c" : 'red'}
                    type='text'
                />
            </Label>
            <Label>
                password
                <Input
                    handleChange={handleChangePassword}
                    value={passwordValue}
                    color={isAuth !== 'no' ? "#27569c" : 'red'}
                    type='password'
                />
            </Label>
            <Button/>
        </Form>
    );
};

export default AuthForm;