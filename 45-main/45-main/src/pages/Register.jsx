import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../features/store";


const Register = () => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { register } = useAuthStore()

    const handleRegister = async () => {
        const userData = { username, email, password }
        const errMsg = register(userData);
        if (errMsg) {
            setError(errMsg)
            return;
        }
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <Input placeholder="Логин" name="username" value={username} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input.Password placeholder="Пароль" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <Button onClick={handleRegister}>Зарегистрироваться</Button>
        </div>
    )
}

export default Register;