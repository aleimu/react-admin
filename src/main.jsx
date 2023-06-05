import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/styles/index.scss';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import client from './api/query/query.client';
import { MyContextProvider } from '~/tools/context';
dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          {/* 添加devtools */}
          {process.env.NODE_ENV === 'development' ? (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          ) : (
            ''
          )}
          <MyContextProvider>
            <App />
          </MyContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
