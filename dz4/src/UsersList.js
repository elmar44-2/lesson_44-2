import React from 'react';
import { Card, Col, Row } from 'antd';
import useStore from './store';

const UsersList = () => {
  const users = useStore((state) => state.users);

  return (
    <Row gutter={16}>
      {users.map((user) => (
        <Col span={8} key={user.id}>
          <Card title={user.name} bordered={false}>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UsersList;
