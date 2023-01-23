import "./Messenger.css";
import TopBar from "../../components/TopBar/TopBar";
import Message from "../../components/Message/Message";
import OnlineFriends from "../../components/OnlineFriends/OnlineFriends";
const Conversation = () => {
  return (
    <div className="conversation">
      <img src="/assets/new-tour-4.jpg" alt="" />
      <span>Vikas</span>
    </div>
  );
};

export default function Messenger() {
  return (
    <>
      <TopBar></TopBar>
      <div className="messenger">
        <div className="messengerLeft">
          <div className="messengerLeftWrapper">
            <input type="text" placeholder="Search For Friends" />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="messengerChatBox">
          <div className="messengerChatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
            </div>
            <div className="chatBoxBottom">
                <textarea placeholder="write something..."></textarea>
                <button className="chatSendButton">Send</button>
            </div>
          </div>
        </div>
        <div className="messengerOnlineFriend">
          <div className="messengerOnlineFriendWrapper">
            <OnlineFriends/>
          </div>
        </div>
      </div>
    </>
  );
}
