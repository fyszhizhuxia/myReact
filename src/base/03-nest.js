// 组件嵌套
import React, { Component } from "react";
const Tabbar = () => {
  return <div>tabbar</div>;
};
class Child extends Component {
  render() {
    return <div>child</div>;
  }
}
class NavBar extends Component {
  render() {
    return (
      <div>
        NavBar<Child></Child>
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        99
        <NavBar></NavBar>
        <Tabbar></Tabbar>
      </div>
    );
  }
}
