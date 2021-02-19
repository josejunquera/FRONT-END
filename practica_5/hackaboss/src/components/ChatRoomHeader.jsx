import React, { useEffect, useState } from "react";

const ChatRoomHeader = (props) => {
  const [color, setColor] = useState("orange");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setDate(newDate);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div className="chatRoomHeader" style={{ background: color }}>
      {date.toLocaleString()}
    </div>
  );
};

export default ChatRoomHeader;
