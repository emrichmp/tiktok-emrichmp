import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, sound }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <br></br>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>T{sound}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <DiscFullIcon className="videoFooter_record" fontSize="large"/>
        </div>
    )
}

export default VideoFooter 