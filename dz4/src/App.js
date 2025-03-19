import React, { useEffect } from 'react';
import { Layout, Spin } from 'antd';
import useUsers from './useUsers';
import UsersList from './UsersList';

const { Content } = Layout;

const App = () => {
  const { isLoading, error } = useUsers();

  if (isLoading) return <Spin size="large" style={{ marginTop: '20%' }} />;
  if (error) return <div>Error loading users</div>;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Users List</h2>
        <UsersList />
      </Content>
    </Layout>
  );
};

export default App;
