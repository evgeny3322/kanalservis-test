import React from 'react';
import styled from 'styled-components';
import {useWindowSize} from "../../../../hooks/useWindowSize";
import {RootState, useAppSelector} from "../../../../store/store";
import {PostsItem} from "../../../../store/reducers/post-reducer";

type Props = {
    id: number
    title: string
}

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const Paragraph = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const Posts: React.FC<Props> = ({id, title}) => {
    const windowSize = useWindowSize();
    const getPosts = (state: RootState) => state.posts.posts;
    const posts = useAppSelector(getPosts);

    return (
        <>
            <WrapperTitle>
                <Wrapper>
                    Title:
                    {posts.map((item: PostsItem) => {
                        if (item.userId === id) {
                            return <span key={item.title} title={item.title}>{title}</span>;
                        }
                        return null;
                    })}
                </Wrapper>
            </WrapperTitle>
            {windowSize.width > 350 ? (
                <WrapperBody>
                    <Paragraph key={id}>
                        {posts.map((item: PostsItem) => {
                            if (item.userId === id) {
                                return item.body;
                            }
                            return null;
                        })}
                    </Paragraph>
                </WrapperBody>
            ) : null}
        </>
    );
};

export default Posts;