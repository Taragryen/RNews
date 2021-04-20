import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import LayoutMenu from './LayoutMenu';
import './index.css';
import logoImg from '../../assets/logo.png';
// import { user } from 'src/api/switch';

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

/**基本布局容器 */
const BasicLayout: React.FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  // const [userInfo, setuserInfo] = useState<string>();

  const toggle = () => {
    setCollapsed(collapsed => !collapsed);
  };

  // const getUserInfo = async () => {
  //   const resp = await user();
  //   setuserInfo(resp.data.data.username);
  //   window.localStorage.setItem("token", resp.data.data.token);
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <Link to="/">
          <div className="logo">
            <img
              src={logoImg}
              alt="WorkFlow"
              width="32px"
              height="28px"
              style={{ display: 'inline-block' }}
            />
            {!collapsed && (
              <h1 style={{ display: 'inline-block', marginLeft: 10 }}>
                新闻管理
              </h1>
            )}
          </div>
        </Link>
        <LayoutMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
          {/* <span
            style={{
              position: "absolute",
              right: 0,
              marginRight: 20,
              fontSize: 15,
            }}
          >
            <UserOutlined style={{ fontSize: 20 }} />
            {userInfo || "Null"}
          </span> */}
        </Header>
        <Content style={{ margin: '16px' }}>
          <Card style={{ height: '100%' }}>{props.children}</Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          {`News Manage © ${new Date().getFullYear()} Created by XuShiZhao`}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
