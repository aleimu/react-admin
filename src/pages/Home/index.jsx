import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const content = React.createContext(null);

function App() {
  const [theme, setTheme] = React.useState('red');
  return (
    <content.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <div>{theme}</div>
        <ChildA />
        <ChildB />
      </div>
    </content.Provider>
  );
}

function ChildA() {
  const { setTheme } = React.useContext(content);
  return <button onClick={() => setTheme('red')}>red</button>;
}

function ChildB() {
  const { setTheme } = React.useContext(content);
  return <button onClick={() => setTheme('blue')}>blue</button>;
}

const Home = () => {
  // 路由跳转
  const router = useNavigate();

  const toRedux = () => router('/toolkit');
  const toQuery = () => router('/query');

  return (
    <Card title="主页">
      <div>home 页</div>
      <br />
      <App></App>
      <br />
      <button onClick={toRedux}>查看redux-toolkitDemo</button>
      <br />
      <br />
      <button onClick={toQuery}>查看react-queryDemo</button>
    </Card>
  );
};

export default Home;
