import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../features/store";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { login } = useAuthStore()
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleLogin = () => {
        const errMsg = login(credentials.username, credentials.password)
        if (errMsg) {
            setError(errMsg)
            return;
        }
        navigate('/')
    }

    return (
        <div>
            <h2>Вход</h2>
            <Input placeholder="Логин" name="username" onChange={handleChange} />
            <Input.Password placeholder="Пароль" name="password" onChange={handleChange} />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <Button onClick={handleLogin}>Войти</Button>
        </div>
    )
}

export default Login;