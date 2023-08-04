import './Login.css'
import Header from '../signUp/Header'

const Login = () => {
    return (
        <div className="Login">
            <Header />
            <div className="loginForm">
                Login
                Email/Username
                <input className="name"></input>
                Password
                <input type="password" className="password"></input>
                Show Password
                <input type="checkbox" className="hideToggle"></input>
            </div>
        </div>
    )
}

export default Login