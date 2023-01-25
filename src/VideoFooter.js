import "./VideoFooter.css"
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';
// import Ticker from "react-ticker";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const VideoFooter = (props) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
            <AccountCircleRoundedIcon className="videoFooter_channelIcon"/>
                <h3 className="videoFooter_channel"> @{props.channel}</h3>
                <br></br>
                <p>{props.description}</p>
                <div className="videoFooter_ticker">
                    {/* <MusicNoteIcon className="videoFooter_icon"/> */}
                    {/* <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{props.sound}</p>
                            </>
                        )}
                    </Ticker> */}
                    <p className="videoFooter_sound">{props.sound}</p>
                </div>
            </div>
            <DiscFullIcon className="videoFooter_record" fontSize="large"/>
        </div>
    )
}

export default VideoFooter 
