import React from "react";
// import logo from "./logo.svg";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { Sider, Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout className="height">
        <Sider className="sider">Sider</Sider>
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

export default App;
