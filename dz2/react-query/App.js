import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error('Network error');
  return response.json();
};

function App() {
  const { data, status, error } = useQuery('userData', () => fetchData(1));

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default App;
