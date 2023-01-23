import "./Message.css";

export default function Message({own}) {
    console.log(own)
  return (
    <>
    <div className={own?'message own':'message'}>
      <img src="/assets/leo.jpg" alt="" />
      <span className="chat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo
        ipsum aut dolor non obcaecati a mollitia voluptatibus, ipsam
        exercitationem.
      </span>
    </div>
    <div className={own?'chatTime own':'chatTime notOwn'}>8 hrs ago</div>
    </>
  );
}
