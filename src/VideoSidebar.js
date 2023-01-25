import './videoSidebar.css'
import {useState } from "react"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
// import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';



function VideoSidebar(props) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div>
                <div>
                    {liked ? (
                        <FavoriteIcon onClick={(e) => setLiked(false)} className="videoSidebar_button"/>
                    ):(
                        <FavoriteBorderRoundedIcon onClick={(e) => setLiked(true)} className="videoSidebar_button"/>
                    )}
                    <p>{liked ? props.likes+1:props.likes}</p>
                </div>
                <div>
                    <CommentRoundedIcon className="videoSidebar_button"/>
                    <p>{props.messages}</p>
                </div>
                {/* <div className="videoSidebar_button">
                    <BookmarkBorderRoundedIcon />
                </div> */}
                <div>
                    <ReplyRoundedIcon className="videoSidebar_button"/>
                    <p>{props.shares}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoSidebar
