import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/store";
import { Button } from "antd";


const Navbar = () => {
    const { user, logout } = useAuthStore()
    const navigate = useNavigate()

    return (
        <nav>
            <h1>Магазин</h1>
            {user ? (
                <>
                    <span>Привет, {user.username}</span>
                    <Button onClick={() => { logout();  navigate("/login")}}>Выйти</Button>
                </>
            ) : (
                <>
                    <Button onClick={() => navigate("/login")}>Войти</Button>    
                    <Button onClick={() => navigate("/register")}>Регистрация</Button>
                </>
            )}
        </nav>
    )
}


export default Navbar;