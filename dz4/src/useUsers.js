import { useQuery } from 'react-query';
import axios from 'axios';
import useStore from './store';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const useUsers = () => {
  const setUsers = useStore((state) => state.setUsers);

  return useQuery('users', fetchUsers, {
    onSuccess: (data) => {
      setUsers(data);
    },
  });
};

export default useUsers;
