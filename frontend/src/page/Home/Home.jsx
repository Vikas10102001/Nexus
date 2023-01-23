import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="home">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
