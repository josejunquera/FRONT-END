import "./App.css";
import React, { useRef, useState } from "react";
import { Message } from "./components/Message";
import ChatRoomHeader from "./components/ChatRoomHeader";

function App() {
  const [messageList, setMessages] = useState(messages);
  const [value, setValue] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    const res = await fetch("http://localhost:3050/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        author: 456323,
        body: value,
        date: new Date().toISOString(),
        // id: messageList.length + 1,
      }),
    });
    const resMessage = await res.json();
    console.log(resMessage);

    let newMsgList = [...messageList];

    newMsgList.push();
    setMessages(messageList);
    setValue("");
  }

  function loadPosts(evento) {
    evento.preventDefault();
    fetch("http://localhost:3050/messages")
      .then((res) => res.json())
      .then(
        (res) => setMessages(res),
        (msg) => console.error("Err", msg)
      );
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="chatRoom">
        <ChatRoomHeader></ChatRoomHeader>
        {messageList.map((message) => (
          <Message key={message.id} msg={message}></Message>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            name="message"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" value="Submit">
            Send
          </button>
        </form>
        <button type="submit" onClick={loadPosts}>
          Upload Messages
        </button>
      </div>
    </div>
  );
}
export default App;

const messages = [];
