import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
const { Sider, Content } = Layout;
class PageLayout extends Component {
  render() {
    return (
      <div className="height">
        <Layout>
          <Sider className="sider">
            <div className="rectangle"></div>
          </Sider>
          <Layout className="sider">
            {/* <Header className="sider">Header</Header> */}
            <div className="div-content">
              <Content className="content">Content</Content>
            </div>
            {/* <Footer className="sider">Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default PageLayout;
