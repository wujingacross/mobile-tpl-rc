import React from 'react';
import { Wrapper, DefaultHeightWrapper } from './style';

export default function NavBar(props) {
  const {
    title = '二维码',
    leftCon = '返回',
    rightCon = '',
    fixed = true,
    onLeftClick,
    onRightClick
  } = props;

  return (
    <>
      <Wrapper fixed={fixed}>
        <div
          className="navbar_left"
          onClick={() => onLeftClick && onLeftClick()}
        >
          {leftCon}
        </div>
        <div className="navbar_title">{title}</div>
        <div
          className="navbar_right"
          onClick={() => onRightClick && onRightClick()}
        >
          {rightCon}
        </div>
      </Wrapper>
      <DefaultHeightWrapper fixed={fixed} />
    </>
  );
}
