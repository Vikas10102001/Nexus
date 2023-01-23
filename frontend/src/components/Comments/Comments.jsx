import { MoreVert, ThumbUp, Close } from "@mui/icons-material";
import React from "react";

const SingleComment = () => {
  return (
    <>
      <div className="singleCommentTop">
        <img src="/assets/aarav.jpg" alt="" className="commentProfile" />
        <div className="commentText">Very nice picture</div>
      </div>
      <div className="singleCommentBottom">
        <div className="commentLikes">
          <span>12</span>
          <button>
            Like <ThumbUp />
          </button>
        </div>
        <button>Reply</button>
        <button>
          <MoreVert />
        </button>
      </div>
    </>
  );
};

export default function Comment() {
  return (
    <div className="commentSection">
      <div className="commentSectionTop">
        <h1>Comments</h1>
        <button className="shareButton">
          <Close className="classes.commentCloseIcon" />
        </button>
      </div>
      <div className="commentSectionMiddle">
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <div className="commentSectionBottom">
        <textarea placeholder="write your Comment"></textarea>
        <button className="commentUploadButton">Upload</button>
      </div>
    </div>
  );
}
