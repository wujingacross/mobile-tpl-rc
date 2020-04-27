import React from 'react';
import { Wrapper } from './style';

const generator = type =>
  class extends React.Component {
    render() {
      return (
        <div
          id={type}
          {...this.props}
          className={`${type} ${this.props.className || ''}`}
        >
          {this.props.children}
        </div>
      );
    }
  };

const Layout = props => {
  return (
    <Wrapper id="layout" {...props} className={props.className || ''}>
      {props.children}
    </Wrapper>
  );
};

Layout.Header = generator('layout-header');
Layout.Content = generator('layout-content');
Layout.Footer = generator('layout-footer');
export default Layout;
