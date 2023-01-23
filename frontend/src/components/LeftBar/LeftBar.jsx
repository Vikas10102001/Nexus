import "./LeftBar.css";
import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  Work,
  Event,
} from "@mui/icons-material";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarItem">
            <RssFeed className="leftBarItemIcon" />
            <span className="leftBarItemText">Feed</span>
          </li>
          <li className="leftBarItem">
            <Chat className="leftBarItemIcon" />
            <span className="leftBarItemText">Chat</span>
          </li>
          <li className="leftBarItem">
            <PlayCircleFilled className="leftBarItemIcon" />
            <span className="leftBarItemText">Videos</span>
          </li>
          <li className="leftBarItem">
            <Group className="leftBarItemIcon" />
            <span className="leftBarItemText">Groups</span>
          </li>
          <li className="leftBarItem">
            <Bookmark className="leftBarItemIcon" />
            <span className="leftBarItemText">Bookmarks</span>
          </li>
          <li className="leftBarItem">
            <Work className="leftBarItemIcon" />
            <span className="leftBarItemText">Jobs</span>
          </li>
          <li className="leftBarItem">
            <HelpOutline className="leftBarItemIcon" />
            <span className="leftBarItemText">Questions</span>
          </li>
          <li className="leftBarItem">
            <Event className="leftBarItemIcon" />
            <span className="leftBarItemText">Events</span>
          </li>
          <li className="leftBarItem">
            <School className="leftBarItemIcon" />
            <span className="leftBarItemText">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show More</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendList">
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
          <li className="leftBarFriend">
            <img src="/assets/aarav.jpg" alt="" />
            <span className="leftBarFriendName">Aarav</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
