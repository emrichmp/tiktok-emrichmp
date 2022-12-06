import tiktoklogo from './images/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <img className="logo" src={tiktoklogo} alt="TikTok" />
            <input type="text"></input>
            <input type="Button" value="+ Upload"></input>
            <input type="Button" value ="Login"></input>
            <MoreVertIcon />
        </div>
    )
}

export default Navbar