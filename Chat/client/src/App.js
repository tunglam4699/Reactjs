import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import onlineIcon from "./icons/onlineIcon.png";
import closeIcon from "./icons/closeIcon.png";
import send from "./icons/iconsend.png";
import videocall from "./icons/videocamera.png";

const socket = io.connect("http://localhost:4000");
let this_id_socket = null;

function App() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);


  var listRoom = ["r1", "r2"];

  var this_id_room = listRoom[Math.floor(Math.random() * listRoom.length)];
  useEffect(() => {
    socket.on("connected", (id) => {
      this_id_socket = id;
      socket.emit("Room", this_id_room);
      socket.off("message").on("message", ({ name, message, id_socket }) => {
        chat.push({ name, message, id_socket });
        setChat([...chat]);
      });
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    if (state.message !== "") {
      socket.emit("message", { name, message, id_socket: this_id_socket });
      setState({ message: "", name });
    }
  };

  const renderChat = () => {
    return chat.map(({ name, message, id_socket }, index) => {
      return id_socket === this_id_socket ? (
        <div className="messageContainer justifyEnd" key={index}>
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{message}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart" key={index}>
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{message}</p>
          </div>
          <p className="sentText pl-10 ">{name}</p>
        </div>
      );
    });
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <div className="infoBar">
          <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>Chat</h3>
          </div>
          <div className="rightInnerContainer">
            <a href="/">
              <img className="iconvideo" src={videocall} alt="video call" />
              <img src={closeIcon} alt="close icon" />
            </a>
          </div>
        </div>
        <div className="textarea">{renderChat()}</div>
        <form onSubmit={onMessageSubmit} className="form">
          <input
            placeholder="name..."
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
            className="input-name"
          />
          <input
            placeholder="type here ....."
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            label="Message"
            className="input"
          />
          <button className="sendButton">
            <img src={send} />
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
