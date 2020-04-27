import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './styled';

function NotFound() {
  const location = useLocation();

  return (
    <Wrapper>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </Wrapper>
  );
}

export default NotFound;
