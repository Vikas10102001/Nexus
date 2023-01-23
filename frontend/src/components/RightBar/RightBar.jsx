import "./RightBar.css";
import { Cake } from "@mui/icons-material";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
const HomeRightBar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <Cake className="birthdayIcon" />
        <div className="birthdayText">
          <span className="birthdayName">Mohit</span>&nbsp;and{" "}
          <span className="birthdayOther">3 other friends</span>&nbsp;have
          birthday today
        </div>
      </div>
      <div className="adContainer">
        <img src="/assets/new-tour-2.jpg" alt="" className="ad" />
      </div>
      <div className="onlineContainer">
        <h4 className="onlineContainerText">Friends</h4>
        <OnlineFriends/>
      </div>
    </>
  );
};
const ProfileRightBar = () => {
  return <h1>Profile right Bar</h1>;
};
export default function RightBar({ profile }) {
  return (
    <div className="rightBar">
      <hr className="rightBarHr" />
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
