import tiktoklogo from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={tiktoklogo} alt="TikTok"/></a>
        </div>
    )
}

export default Header;