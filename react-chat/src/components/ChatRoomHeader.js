import React, { useState, useEffect } from "react";

export const ChatRoomHeader2 = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setDate(newDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div className="chatRoomHeader">{date.toLocaleString()}</div>;
};

export class ChatRoomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pepito",
      date: new Date(),
      color: "red",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newDate = new Date();
      this.setState({ date: newDate });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    const second = this.state.date.getSeconds();
    const isEven = second % 2 === 0;
    const newColor = isEven ? "blue" : "red";

    if (newColor !== this.state.color) {
      this.setState({ color: newColor });
    }
  }

  render() {
    return (
      <div className="chatRoomHeader" style={{ background: this.state.color }}>
        {this.state.date.toLocaleString()}
      </div>
    );
  }
}
