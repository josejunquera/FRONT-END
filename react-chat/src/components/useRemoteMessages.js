import { useState, useEffect } from "react";

export const useRemoteMessages = (initialList) => {
  const [messages, setMessages] = useState(initialList);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const loadMessages = async () => {
      const response = await fetch("http://localhost:3050/messages");
      if (response.status === 200) {
        const json = await response.json();
        setMessages(json);
        setErrorMsg("");
      } else {
        setErrorMsg("Ha sucedido un error");
      }
      console.log("evento");
    };
    loadMessages();

    const interval = setInterval(() => {
      loadMessages();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return { messages, errorMsg, setMessages };
};
