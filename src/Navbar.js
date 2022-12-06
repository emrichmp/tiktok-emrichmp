import tiktoklogo from './images/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={tiktoklogo} alt="TikTok"/></a>
            <div className="searchInputs">
                <input className="searchBar" type="text" placeholder="Search Accounts"></input>
                    <SearchRoundedIcon className="searchRoundedIcon"/>
            </div>
            <div className="buttons">
                <input className="uploadButton" type="Button" value="+ Upload"></input>
                <input className="loginButton" type="Button" value ="Log in"></input>
                <MoreVertIcon />
            </div>
        </div>
    )
}

export default Navbar