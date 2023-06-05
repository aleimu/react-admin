import React, { useState, useEffect, useContext } from 'react';
import { Input, Table, Card, Button } from 'antd';
import { getNameSpaceList } from '@/api/index';
import { useDebounceEffect } from '~/tools/debounce';
import { MyContext } from '~/tools/context';
import { useLocalStorage } from '~/tools/useHook';

const AppList = () => {
  const { value, updateValue } = useContext(MyContext);
  console.log(
    '🚀 ~ file: index.jsx:9 ~ AppList ~ value, updateValue:',
    value,
    updateValue
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useLocalStorage('count', 0);

  const loadApps = () => {
    let params = {
      all: true,
      page: page,
      page_size: pageSize,
    };
    getNameSpaceList(params).then((res) => {
      console.log('🚀 ~ file: index.jsx:33 ~ getAppList ~ res:', res);
      setCount(res.count);
    });
  };

  useEffect(() => {
    console.log('🚀 ~ file: index.jsx:40 ~ useEffect ~ user:', setCount);
  });

  return (
    <Card
      bodyStyle={{ padding: '0' }}
      title="我的应用"
      extra={<Input placeholder="应用名..." style={{ width: 150 }} />}
    >
      {/* Button with click */}
      <Button onClick={() => loadApps()}>Load</Button>
      <Button type="default" onClick={() => setCount(count + 1)}>
        Add + {count}
      </Button>
      <p>{value}</p>
      <Button onClick={() => updateValue('New Value')}>Update Context</Button>
      <Table
        rowKey={(record) => record.name}
        // columns={columns}
        // dataSource={apps}
        pagination={{
          current: page,
          total: count,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
    </Card>
  );
};

export default AppList;
