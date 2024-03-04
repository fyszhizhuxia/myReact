import React, { Component } from "react";
import "./css/01-index.css"; //导入css模块，webpack支持

export default class App extends Component {
  render() {
    var my = "echo";
    var obj = { background: "pink", fontSize: "20px" };
    return (
      <div>
        app{10 + 20}-{my}
        {/*react推荐用行内样式，因为react觉得每个组件应该是一个完整的(这样注释代码上会看不见)*/}
        <p style={obj}>{10 > 20 ? "10小于20" : "20"}</p>
        <p style={{ fontSize: "30px" }}>哈哈</p>
        <p className="active" id="other">
          外部样式
        </p>
        {/* for="username" */}
        <label htmlFor="username">用户命: </label>
        <input type="text" id="username"></input>
      </div>
    );
  }
}
