import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Proposal from "./pages/proposal";
import UserAnalysis from "./pages/useranalysis";
import TaskAnalysis from "./pages/taskanalysis";
import DomainAnalysis from "./pages/domainanalysis";
const { Header, Content, Sider } = Layout;
const task = ["Proposal", "User Analysis", "Task Analysis", "Domain Analysis"];
const items2 = [1].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    // icon: React.createElement(icon),
    label: `Submissions`,
    children: Array.from({
      length: 4,
    }).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: task[j],
      };
    }),
  };
});
const App = () => {
  const pages = [
    <Proposal />,
    <UserAnalysis />,
    <TaskAnalysis />,
    <DomainAnalysis />,
  ];
  const [content, setContent] = useState(<Proposal />);
  const handleMenuClick = (e) => {
    setContent(pages[Number(e.key) - 1]);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      ></Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
