import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1f0f2;
  display: flex;
`;

const BackWrapper = styled.div`
  width: 2.5rem;
  height: 2rem;
  margin: auto;
  background-image: url(https://file.1d1d100.com/2019/4/4/cdd4dec7360c4795847915c4ce288a21.gif);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  text-align: center;
`;

const Bground = () => {
  return (
    <Wrapper>
      <BackWrapper />
    </Wrapper>
  );
};

export default Bground;
