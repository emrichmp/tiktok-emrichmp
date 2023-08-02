import Login from './Login'
import Header from './Header'
import NewUser from './NewUser'
import GoogleSignIn from './GoogleSignIn'

const Signin = () => {
    return (
        <div className="Signin">
            <Header />
            <Login />
            <NewUser />
            <GoogleSignIn />
        </div>
    )
}

export default Signin