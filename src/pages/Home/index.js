import React from 'react';
import { withRouter } from 'react-router';
import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar';
import { Wrapper, LinkWrapper } from './styled';

function Home(props) {
  const { history } = props;
  const toCourse = () => {
    history.push('/course');
  };

  return (
    <Layout>
      <Layout.Header>
        <NavBar title="首页" leftCon="返回" onLeftClick={() => history.go(-1)} />
      </Layout.Header>
      <Layout.Content
        style={{
          display: 'flex',
          background: '#F4F4F4'
        }}
      >
        <Wrapper>
          Home page
          <br />
          <LinkWrapper onClick={toCourse}>toCourse</LinkWrapper>
        </Wrapper>
      </Layout.Content>
    </Layout>
  );
}

export default withRouter(Home);
