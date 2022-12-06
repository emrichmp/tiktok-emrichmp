import './videoSidebar.css'
import {useState } from "react"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';



function VideoSidebar(props) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                <div className="videoSidebar_button">
                    <AccountCircleRoundedIcon />
                </div>
                <div className="videoSidebar_button">
                    {liked ? (
                        <FavoriteIcon onClick={(e) => setLiked(false)}/>
                    ):(
                        <FavoriteBorderRoundedIcon onClick={(e) => setLiked(true)}/>
                    )}
                    <p>{liked ? props.likes+1:props.likes}</p>
                </div>
                <div className="videoSidebar_button">
                    <CommentRoundedIcon />
                    <p>{props.messages}</p>
                </div>
                <div className="videoSidebar_button">
                    <BookmarkBorderRoundedIcon />
                </div>
                <div className="videoSidebar_button">
                    <ReplyRoundedIcon />
                    <p>{props.shares}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoSidebar