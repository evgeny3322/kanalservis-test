import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 30px;
`;

type Props = {
    src: string
}

const ImgComponenet: React.FC<Props> = ({src}) => {
    return <Img src={src} alt="photo_user"/>;
};

export default ImgComponenet;
