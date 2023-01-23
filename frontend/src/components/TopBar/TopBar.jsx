import "./TopBar.css";
import { Link } from "react-router-dom";
import { Search, People, Notifications, Message } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">AnchalSocial</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon"/>
          <input type="text" placeholder="Search for friends,post or video" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIconItems">
          <div className="topBarIcon">
            <People/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIcon">
            <Link to="/messenger"><Message /></Link>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIcon">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/leo.jpg" alt="" className="topBarImage" />
      </div>
    </div>
  );
}
