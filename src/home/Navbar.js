import tiktoklogo from '../images/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={tiktoklogo} alt="TikTok"/></a>
            <div className="searchInputs">
                <input className="searchBar" type="text" placeholder="Search Accounts"></input>
                    <SearchRoundedIcon className="searchRoundedIcon"/>
            </div>
            <div className="buttons">
                <Link to="/upload">
                    <input className="uploadButton" type="Button" value="+ Upload"></input>
                </Link>
                <Link to="/signin">
                    <input className="loginButton" type="Button" value ="Sign in"></input>
                </Link>
                <MoreVertIcon />
            </div>
        </div>
    )
}

export default Navbar;