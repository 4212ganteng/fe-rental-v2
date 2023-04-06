import {
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const { SubMenu } = Menu;

const Layouts = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo mt-20" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/customers">
                <UserOutlined />
                <span>Pelanggan</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/mesin">
                <PieChartOutlined />
                <span>Mesin</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>Rental</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link to="/">Rental</Link>
              </Menu.Item>
              {/* <Menu.Item key="4">
                <Link to="/user/bill">Bill</Link>
              </Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <PieChartOutlined />
                  <span>Tracking</span>
                </span>
              }
            >
              <Menu.Item key="6">
                <Link to="/track-sn">Tracking Serial Number</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/track-cust">Tracking Customers</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Link to="/files">
                <FileOutlined />
                <span>Files</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Layouts;
