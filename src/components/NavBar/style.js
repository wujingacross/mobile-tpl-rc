import styled, { css } from 'styled-components';
import { flexWrap } from '@/assets/style/Common.style';

const navbarHeight = '44px';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${navbarHeight};
  background: rgba(255, 255, 255, 1);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);
  ${props =>
    props.fixed &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    `}
  .navbar_left,
  .nav_right {
    display: flex;
    align-items: center;
  }
  .navbar_left {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #959595;
    letter-spacing: 0;
    line-height: 25px;
  }
  .navbar_title {
    flex: 1;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 25px;
    height: 100%;
    ${flexWrap()}
    white-space: nowrap;
  }
  .navbar_right {
    flex: 1;
    padding-right: 15px;
    height: 100%;
  }
`;

export const DefaultHeightWrapper = styled.div`
  ${props =>
    props.fixed &&
    css`
      height: ${navbarHeight};
    `}
`;
