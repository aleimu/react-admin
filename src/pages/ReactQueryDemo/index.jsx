import { getUserList } from '@/api/feature/app';
import { QUERY_USER_LIST } from '@/api/query/query.constant';
// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Card } from 'antd';
const ReactQueryDemo = () => {
  // 不使用react-query时的请求
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState<UserType[]>([]);
  // const getList = () => {
  //   setLoading(true);
  //   getUserList('wang')
  //     .then((res) => setUsers(res.items))
  //     .finally(() => setLoading(false));
  // };
  // useEffect(() => getList(), []);
  // 使用react-query
  const { data: users, isLoading: loading } = useQuery(
    QUERY_USER_LIST,
    () => getUserList('wang'),
    {
      select: (res) => res.items,
    }
  );
  return (
    <Card title="请求测试">
      {loading && <div>loading...</div>}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ReactQueryDemo;
