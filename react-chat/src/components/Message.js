import React from "react";
import Avatar from "./Avatar";
import { MessageBody } from "./MessageBody";

export const Message = ({ msg }) => {
  const { author, body } = msg;
  return (
    <div className="message">
      <Avatar imageId={author} name={author} />
      <MessageBody>{body}</MessageBody>
    </div>
  );
};
