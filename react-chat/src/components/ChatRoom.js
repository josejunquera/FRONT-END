import React, { useRef, useState } from "react";
import { ChatRoomHeader2 as ChatRoomHeader } from "./ChatRoomHeader";
import { Message } from "./Message";
import { useRemoteMessages } from "./useRemoteMessages";

export const ChatRoom = () => {
  const [newMessage, setNewMessage] = useState("");
  const { messages, errorMsg, setMessages } = useRemoteMessages([]);
  const inputRef = useRef();

  const changeMessage = (event) => {
    setNewMessage(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const nuevoMensajeParaElServidor = {
      author: 456326,
      body: newMessage,
      date: new Date().toISOString(),
    };
    const res = await fetch("http://localhost:3050/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nuevoMensajeParaElServidor),
    });
    const resMessage = await res.json();
    const nuevaListaDeMensajesLocal = [...messages, resMessage];
    setMessages(nuevaListaDeMensajesLocal);
    setNewMessage("");
  }

  // const loadMessages = () => {
  //   fetch("http://localhost:3050/messages")
  //     .then((response) => {
  //       console.log("res", response);
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error("Error");
  //       }
  //     })
  //     .then(
  //       (json) => {
  //         setMessages(json);
  //         setErrorMsg("");
  //       },
  //       (err) => {
  //         setErrorMsg("Ha sucedido un error");
  //       }
  //     );
  //   console.log("evento");
  // };

  // const loadMessages = async () => {
  //   const response = await fetch("http://localhost:3050/messages");
  //   if (response.status === 200) {
  //     const json = await response.json();
  //     setMessages(json);
  //     setErrorMsg("");
  //   } else {
  //     setErrorMsg("Ha sucedido un error");
  //   }
  //   console.log("evento");
  // };
  return (
    <div className="chatRoom">
      <ChatRoomHeader />
      {<span style={{ color: "red" }}>{errorMsg} </span>}

      {messages.map((msg) => (
        <Message key={msg.id} msg={msg}></Message>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={newMessage}
          onChange={changeMessage}
          name="message"
          type="text"
        ></input>
        <button type="submit">Enviar</button>
      </form>
      {/* <button onClick={loadMessages}>Cargar mensajes del servidor</button> */}
    </div>
  );
};
