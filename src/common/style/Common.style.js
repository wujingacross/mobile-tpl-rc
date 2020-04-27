export const pageWrap = (color = '#f4f4f4') => `
  display: flex;
  flex-direction: column;
  flex: auto;
  background: ${color};
`;

//一行文字溢出部分用...代替
export const noWrap = () => {
  return `
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `;
};

export const lineWrap = lineNum => {
  return `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineNum};
    overflow: hidden;
    `;
};

export const flexWrap = (justifyContent = 'center') => `
    display: flex;
    justify-content: ${justifyContent};
    align-items: center;
`;

export const divide = (num, direction) => `
  background: #EAEAEA;
  width: ${direction === 'horizontal' ? num : '1px'};
  height: ${direction === 'horizontal' ? '1px' : num};
  transform: ${direction === 'horizontal' ? 'scaleY(0.5)' : 'scaleX(0.5)'};
`;

//扩大可点击区域
export const extendClick = () => {
  return `
        position: relative;
        &:before{
          content: '';
          position: absolute;
          top: -10px; bottom: -10px; left: -10px; right: -10px;
        };
      `;
};
