import tiktoklogo from './images/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={tiktoklogo} alt="TikTok"/></a>
            <input className="searchBar" type="text" placeholder="Search Accounts"></input>
            <input className="uploadButton" type="Button" value="+ Upload"></input>
            <input className="loginButton" type="Button" value ="Log in"></input>
            <MoreVertIcon />
        </div>
    )
}

export default Navbar