import React from 'react';
import styled from "styled-components";
import {RootState, useAppDispatch, useAppSelector} from "../../../store/store";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {ReactComponent as Logo} from '../../../assets/icons/logo.svg';
import {ReactComponent as LogoShort} from '../../../assets/icons/logo_short.svg';
import {resetAuthorization} from "../../../store/reducers/auth-reducer";
import {ReactComponent as Exit} from '../../../assets/icons/exit.svg';

const WrapperHeader = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: ${(props) => props.color || 'none'};

  svg {
    cursor: pointer;
  }
`;

const WrapperParagraph = styled.div`
  display: flex;
  align-items: center;
`;


const Paragraph = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`;

const Button = styled.button`
  border: none;
  background: none;
`;
const Header = () => {
    const getLoginAuth = (state: RootState) => {
        if (state.auth.inputLogin && state.auth.auth === 'yes') {
            return state.auth.login;
        }
        return undefined;
    };
    const userName: string | undefined = useAppSelector(getLoginAuth);

    const size = useWindowSize();


    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(resetAuthorization());
    };
    return (
        <WrapperHeader color={"#E4B062"}>
            {size.width <= 350 ? <LogoShort/> : <Logo/>}
            <WrapperParagraph>
                <div>
                    {size.width > 960 ? <Paragraph>{userName}</Paragraph> : null}
                    {size.width > 350 ? <Button onClick={handleClick}> <Exit/> </Button> : null}
                </div>
            </WrapperParagraph>
        </WrapperHeader>
    );
};

export default Header;