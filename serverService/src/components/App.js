import React from 'react';
import HostWrapper from './hostContainer/HostWrapper'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <Layout>
      <Header className="header-layout">X-Control</Header>
      <Content className="content-layout" >
        <HostWrapper></HostWrapper>
      </Content>
      <Footer className='footer-layout'> by death_maldonado88</Footer>
    </Layout>
  );
};