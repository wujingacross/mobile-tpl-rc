import React from 'react';
import styled from 'styled-components';
import nullPng from '@/assets/imgs/mine/myStudent/empty@2x.png';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ bgColor }) => `${bgColor || `rgba(255,255,255,1)`}`};
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .img {
    width: 95px;
    height: 96px;
    background: ${() => `url(${nullPng}) no-repeat center`};
    background-size: 95px 96px;
  }

  .text {
    margin-top: 42px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #959595;
    text-align: center;
    line-height: 23px;
    width: 250px;
  }
`;

export default function NullData({ bgColor, text = '' }) {
  return (
    <Wrapper bgColor={bgColor}>
      <div className="img" />
      {text && <div className="text">{text}</div>}
    </Wrapper>
  );
}
