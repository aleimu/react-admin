import { Layout, Menu, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {
  Link,
  matchRoutes,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import routers from '@/routes/routerConfig';
// 这种方式可以,看习惯吧
// import classNames from 'classnames/bind';
// import styles from './AppLayout.css';
// const cx = classNames.bind(styles);
// <div className=cx('demo-logo-vertical') />
import '@/styles/AppLayout.css';

const { Header, Content, Sider, Footer } = Layout;

export default function AppLayout() {
  const location = useLocation();
  const router = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    location.pathname === '/' ? router('/home') : null;
  }, [location.pathname]);

  useEffect(() => {
    console.log(location.pathname);
    // 返回匹配到的路由数组对象，每一个对象都是一个路由对象˝
    const routes = matchRoutes(routers, location.pathname);
    const pathArr = [];
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      });
    }
    setSelectedKeys(pathArr);
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={selectedKeys}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routers[0].children?.map((router) => (
            <Menu.Item key={router.path} icon={router.meta?.icon}>
              <Link to={'/' + router.path}>{router.meta?.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout className={collapsed ? 'site-layout' : 'site-layout-collapsed'}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            overflow: 'auto',
            padding: '10px',
          }}
        >
          <Outlet />
        </Content>

        <Footer
          className="site-layout-background"
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: 'center',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}
