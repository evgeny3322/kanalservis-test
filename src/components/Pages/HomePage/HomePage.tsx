import React, {useEffect} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "../../../store/store";
import {fetchPostsAction} from "../../../store/reducers/post-reducer";
import {fetchUsersAction, UserItem} from "../../../store/reducers/user-reducer";
import styled from "styled-components";
import Photo from "./Photo/Photo";
import Posts from "./Posts/Posts";

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsersAction());
        dispatch(fetchPostsAction());
        // eslint-disable-next-line
    }, []);

    const WrapperUsers = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 20px;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
    `;

    const Wrapper = styled.div`
      width: 467px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      border: 5px solid #27569c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      @media ${(props) => props.theme.tablet} {
        width: 40%;
      }
    `;
    const Paragraph = styled.p`
      font-weight: 800;
      font-size: 16px;
      line-height: 30px;
    `;

    const WrapperParagraph = styled.div`
      @media ${(props) => props.theme.tablet} {
        display: flex;
        flex-direction: column;
      }
    `;

    const getUsers = (state: RootState) => state.users.users;
    const users = useAppSelector(getUsers);
    return (
        <WrapperUsers>
            <>
                {users.map((item: UserItem) => {
                    return (
                        <Wrapper key={item.name}>
                            <WrapperParagraph>
                                <Photo id={item.id}/>
                                <Paragraph>Auth: {item.name}</Paragraph>
                                <Paragraph>Company: {item.company.name} </Paragraph>
                            </WrapperParagraph>
                            <Posts id={item.id} title={item.title}/>
                        </Wrapper>
                    );
                })}
            </>
        </WrapperUsers>
    );
}
export default HomePage;