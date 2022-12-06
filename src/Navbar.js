import tiktoklogo from './images/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <img className="logo" src={tiktoklogo} alt="TikTok" />
            <input className="searchBar" type="text"></input>
            <input className="uploadButton" type="Button" value="+ Upload"></input>
            <input className="loginButton" type="Button" value ="Log in"></input>
            <MoreVertIcon />
        </div>
    )
}

export default Navbar