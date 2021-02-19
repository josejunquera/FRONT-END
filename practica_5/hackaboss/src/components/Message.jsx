import React from "react";
import Avatar from "./Avatar";
import MessageBody from "./MessageBody";

export const Message = ({ msg }) => (
  <div className="message">
    <Avatar imageId={msg.author} name={msg.author}></Avatar>
    <MessageBody>{msg.body}</MessageBody>
  </div>
);

export default Message;
