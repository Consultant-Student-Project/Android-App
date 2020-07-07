import React, { useState, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
// import SocketIOClient from "socket.io-client";

function ChatScreen() {
  // constructor(props) {
  //   super(props);

  //   this.onSend = this.onSend.bind(this);
  //   this.onReceivedMessage = this.onReceivedMessage.bind(this);
  //   this.getUserId = this.getUserId.bind(this);

  //   this.state = {
  //     messages: [],
  //     userId: null,
  //     username: null,
  //   };

  //   this.socket = SocketIOClient("http://192.168.1.37:8080");
  //   this.socket.on("messages", this.onReceivedMessage);
  //   this.socket.on("userId", this.getUserId);
  // }

  // getUserId(data) {
  //   const { userId } = data;
  //   this.setState({ userId });
  // }

  // onReceivedMessage(mes) {
  //   const arrMes = [{ ...mes.messages }];
  //   this.setState((previousState) => ({
  //     messages: GiftedChat.append(previousState.messages, arrMes),
  //   }));
  // }
  // onSend(messages) {
  //   const mes = messages[0];
  //   const { username } = this.state;
  //   mes["username"] = username;
  //   this.socket.emit("messages", mes);
  // }
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}

export default ChatScreen;
