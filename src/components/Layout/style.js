import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .layout-footer,
  .layout-header {
    flex: 0 0 auto;
  }
  .layout-content {
    flex: auto;
  }
`;
