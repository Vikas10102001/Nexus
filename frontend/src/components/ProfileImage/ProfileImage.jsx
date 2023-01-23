import "./ProfileImage.css";
import { PhotoCamera } from "@mui/icons-material";

export default function ProfileImage() {
  return (
    <div className="profileImageContainer">
      <div className="profileImageContainerWrapper">
        <div className="profileCover">
          <img src="/assets/new-tour-1.jpg" alt="" />
          <div className="profileCoverButton">
            {" "}
            <PhotoCamera /> Edit your cover image
          </div>
        </div>
        <div className="profileImage">
          <img src="/assets/monica.jpg" alt="" />
          <PhotoCamera className="profileImageButton"/>
        </div>
      </div>
    </div>
  );
}
