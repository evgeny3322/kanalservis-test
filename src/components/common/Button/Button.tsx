import React from 'react';
import {useAppDispatch} from "../../../store/store";
import {authorization} from "../../../store/reducers/auth-reducer";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #E4B062;
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  padding: 5px;
  width: 213px;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: #F6CC8C;
  }
`;



const ButtonContainer = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(authorization());
    };
    return <Button onClick={handleSubmit}>Submit</Button>;
};

export default ButtonContainer;
