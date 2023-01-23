import classes from "./Post.module.css";
import Comments from '../Comments/Comments'
import {
  MoreVert,
  ThumbUp,
  Favorite,
  Comment,
  Share,
} from "@mui/icons-material";
import { useState, useReducer } from "react";



const reducer = (state, action) => {
  if (action.type === "liked" && state.counter === false) {
    return {
      likes: state.likes + 1,
      counter: true,
    };
  } else
    return {
      likes: state.likes - 1,
      counter: false,
    };
};
export default function Post() {
  const [commentState, commentStateHandler] = useState(false);
  const [likeState, likeDispatch] = useReducer(reducer, {
    likes: 0,
    counter: false,
  });
  const postLikeHandler = () => {
    likeDispatch({ type: "liked" });
  };
  const commentHandler = () => {
    commentStateHandler(!commentState);
  };
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src="/assets/aarav.jpg"
              alt=""
              className={classes.postProfile}
            />
            <div className={classes.postTopLeftInner}>
              <div className={classes.postDetail}>
                <span className={classes.postDetailName}>Vikas Chand</span> is
                at &nbsp;
                <span className={classes.postDetailLocation}>
                  Rishikesh
                </span>{" "}
                with &nbsp;
                <span className={classes.postDetailTag}>3 others</span>
              </div>
              <span className={classes.postTime}>Posted 5 mins ago</span>
            </div>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postMiddle}>
          <div className={classes.postCaption}>Hey this is my first Post</div>
          <img
            src="/assets/new-tour-1.jpg"
            alt=""
            className={classes.postImage}
          />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLikes} onClick={postLikeHandler}>
            <ThumbUp
              className={`${classes.postBottomIcon} ${classes.thumbIcon}`}
            />
            <Favorite
              className={`${classes.postBottomIcon} ${classes.FavoriteIcon}`}
            />
            <span className={classes.likes}>{likeState.likes}</span>
          </div>
          <div className={classes.commentShare}>
            <button className={classes.commentButton} onClick={commentHandler}>
              <Comment className={classes.postBottomIcon} />
            </button>
            <button className={classes.shareButton}>
              <Share className={classes.postBottomIcon} />
            </button>
          </div>
        </div>
        {commentState?<Comments/>:<></>}
      </div>
    </div>
  );
}
