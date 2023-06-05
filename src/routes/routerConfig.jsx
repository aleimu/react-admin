import ErrorPage from '@/pages/ErrorPage';
import AppLayout from '@/layout/AppLayout';
import { lazy } from 'react';
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
// 快速导入工具函数
const lazyLoad = (moduleName) =>
  lazy(() => import(`@/pages/${moduleName}/index.jsx`));

const Home = lazyLoad('Home');
const ReduxToolkitDemo = lazyLoad('ReduxToolkitDemo');
const ReactQueryDemo = lazyLoad('ReactQueryDemo');
const AppList = lazyLoad('AppList');

const routers = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    meta: {
      title: '',
    },
    children: [
      {
        path: 'app',
        element: <AppList />,
        meta: {
          title: '我的应用',
          icon: <FileOutlined />,
        },
      },
      {
        path: 'home',
        element: <Home />,
        meta: {
          title: 'Home',
          icon: <PieChartOutlined />,
        },
      },
      {
        path: 'toolkit',
        element: <ReduxToolkitDemo />,
        meta: {
          title: 'React Toolkit',
          icon: <UserOutlined />,
        },
      },
      {
        path: 'query',
        element: <ReactQueryDemo />,
        meta: {
          title: 'React Query',
          icon: <FileOutlined />,
        },
      },
    ],
  },
];

export default routers;
