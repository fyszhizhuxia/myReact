import React, { Component } from "react";
import "./css/01-index.css"; //导入css模块，webpack支持

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("click1", this.a);
          }}
        >
          add1
        </button>
        {/* 不推荐 ，需要修正this*/}
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        {/* 推荐 */}
        <button onClick={this.handleClick3}>add3</button>
        {/* 比较推荐，可以传参 */}
        <button onClick={() => this.handleClick4()}>add4</button>
      </div>
    );
  }
  handleClick2() {
    // 读取不到this,this为undefine
    console.log("click2", this.a);
  }
  handleClick3 = () => {
    console.log("click3", this.a);
  };
  handleClick4 = () => {
    console.log("click4", this.a);
  };
}
/*
call,改变this,自动执行函数
apply,改变this,自动执行函数
bind，改变this,不会自动执行函数
*/
var obj1 = {
  name: "obj1",
  getName() {
    console.log(this.name);
  },
};
var obj2 = {
  name: "obj2",
  getName() {
    console.log(this.name);
  },
};
// obj1.getName();
// obj2.getName();
// obj1.getName.call(obj2);
// obj1.getName.apply(obj2);
obj1.getName.bind(obj2);
