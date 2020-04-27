import styled from 'styled-components';

export const Wrapper = styled.div`
  display: table;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  font-size: 13px;
  margin: 0 auto;
  padding: 12px 0;
  line-height: 19px;
  &::before,
  &::after {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 25px;
    border-top: 1px solid #dcdcdc;
    transform: translateY(50%);
  }
  .moreDivider_text {
    color: #c9c9c9;
    display: inline-block;
    padding: 0 5px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
  }
`;
