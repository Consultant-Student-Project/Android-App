import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import SocketIOClient from "socket.io-client";
import { Button } from "react-native";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.onSend = this.onSend.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.getUserId = this.getUserId.bind(this);

    this.state = {
      messages: [],
      userId: null,
      username: null,
    };

    this.socket = SocketIOClient("http://localhost:3000");
    this.socket.on("messages", this.onReceivedMessage);
    this.socket.on("userId", this.getUserId);
  }

  getUserId(data) {
    const { userId } = data;
    this.setState({ userId });
  }

  onReceivedMessage(mes) {
    const arrMes = [{ ...mes.messages }];
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, arrMes),
    }));
  }
  onSend(messages) {
    const mes = messages[0];
    const { username } = this.state;
    mes["username"] = username;
    this.socket.emit("messages", mes);
  }
  render() {
    return (
      <>
        <Button title="Connect" onPress={() => {}} />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        />
      </>
    );
  }
}
