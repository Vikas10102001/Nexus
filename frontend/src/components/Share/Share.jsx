import "./Share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/aarav.jpg" alt="" className="shareTopImage" />
          <input
            type="text"
            placeholder="What's in your mind ? Vikas"
            className="shareTopInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="Tomato" className="shareOptionIcon" />
              <div className="shareOptionText">Photo Or Video</div>
            </div>
            <div className="shareOption">
              <Label htmlColor="Blue" className="shareOptionIcon" />
              <div className="shareOptionText">Tag</div>
            </div>
            <div className="shareOption">
              <Room  htmlColor="Green" className="shareOptionIcon" />
              <div className="shareOptionText">Location</div>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="GoldenRod" className="shareOptionIcon" />
              <div className="shareOptionText">Feelings</div>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
