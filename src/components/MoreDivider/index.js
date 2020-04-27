import React from 'react';
import { Wrapper } from './style';

function MoreDivider(props) {
  const { text } = props;
  return (
    <Wrapper>
      <span className="moreDivider_text">{text || '已经没有更多内容了'}</span>
    </Wrapper>
  );
}

export default MoreDivider;
