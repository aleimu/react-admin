import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
const ReduxToolkitDemo = () => {
  // 路由跳转
  const router = useNavigate();

  const toHome = () => router('/home');

  return (
    <Card title="状态测试">
      <div>Redux Toolkit Demo 页</div>
      <br />
      <button onClick={toHome}>去 home</button>
    </Card>
  );
};

export default ReduxToolkitDemo;
