import { useRouteError } from 'react-router-dom';
import { Card } from 'antd';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Card title="404" id="error-page">
      <h1>404</h1>
      <p>你访问的页面不存在</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Card>
  );
}
