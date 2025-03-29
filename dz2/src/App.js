import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store';

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(1));
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data ? data.name : 'No Data'}</h1>
      <p>Email: {data ? data.email : 'No Data'}</p>
    </div>
  );
}

export default App;
