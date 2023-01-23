import "./Profile.css";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <ProfileImage />
            <div className="profileTopDescription">
              <h1 className="profileName">Vikas Chand</h1>
              <p className="profileDescription">Hello friends how u doin</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
