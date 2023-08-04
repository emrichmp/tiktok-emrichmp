import Header from '../signUp/Header'

const NewUser = () => {
    return (
        <div className="Signup">
            <Header />
            <div className="signupForm">
                Sign Up!
                Email
                <input name="name"></input>
                Password
                <input type="password" name="password"></input>
                Confirm Password
                <input type="password" name="confirmPassword"></input>
                Show Password
                <input type="checkbox" name="hideToggle"></input>
            </div>
        </div>
    )
}

export default NewUser;