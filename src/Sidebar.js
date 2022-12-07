import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import './Sidebar.css'
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import PetsIcon from '@mui/icons-material/Pets';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Sidebar = () => {
    return(
        <div className="sideBar">
            <div className="topBar">
                <div className="topBarItems" id="fyp">
                    <HomeIcon /><h2>For You</h2>
                </div>
                <div className="topBarItems">
                    <PeopleOutlinedIcon /><h2>Following</h2>
                </div>
                <div className="topBarItems">
                    <VideocamOutlinedIcon /><h2>LIVE</h2>
                </div>
            </div>
            <p>Popular Topics</p>
            <div className="bottomBar">
                <div className="bottomBarItems">
                    <SentimentVerySatisfiedOutlinedIcon />
                    <h3>Comedy</h3>
                </div>
                <div className="bottomBarItems">
                <SportsEsportsOutlinedIcon />
                    <h3>Gaming</h3>
                </div>
                <div className="bottomBarItems">
                    <LocalPizzaOutlinedIcon />
                    <h3>Food</h3>
                </div>
                <div className="bottomBarItems">
                <NightlifeIcon />
                    <h3>Dance</h3>
                </div>
                <div className="bottomBarItems">
                    <SentimentVerySatisfiedOutlinedIcon />
                    <h3>Beauty</h3>
                </div>
                <div className="bottomBarItems">
                    <PetsIcon />
                    <h3>Animals</h3>
                </div>
                <div className="bottomBarItems">
                    <SportsBasketballIcon />
                    <h3>Sports</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;