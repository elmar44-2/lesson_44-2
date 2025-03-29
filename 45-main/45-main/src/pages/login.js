import { useState } from 'react';
import useStore from '../store/store'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const setUser = useStore((state) => state.setUser);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ id: Date.now(), name: username });
  };

  return (
    <div>
      <h1>Войти</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Имя пользователя</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
