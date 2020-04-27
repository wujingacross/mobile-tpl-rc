import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from './redux/action';
import { Wrapper } from './styled';

function Course(props) {
  const { fetchData } = props;
  console.log('444', props);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Wrapper>
      Course Home
      <Link to="/">back Home</Link>
    </Wrapper>
  );
}

export default connect(
  ({ global, course }) => ({
    global,
    course
  }),
  { fetchData }
)(Course);
