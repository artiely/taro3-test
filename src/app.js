import React, { Component } from "react";
import Taro, { View, Text, Button } from "@tarojs/components";
import "./app.scss";
import Container from "./store";
class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Container.Provider>{this.props.children}</Container.Provider>;
  }
}

export default App;
