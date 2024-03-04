import React, { Component } from "react";
import "./css/01-index.css"; //导入css模块，webpack支持

export default class App extends Component {
  render() {
    return (
      <div>
        <input />
        {/* 弊端：内容处理逻辑太多，不适用 */}
        <button
          onClick={() => {
            console.log("click1");
          }}
        >
          add1
        </button>
        {/* 涉及this指向问题 */}
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        {/* 比较推荐 */}
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }
  handleClick2() {
    console.log("click2");
  }
  handleClick3 = () => {
    console.log("click3");
  };
  handleClick4 = () => {
    console.log("click4");
  };
}

class A {
  constructor() {
    this.a = "aaaa";
    this.b = "bbbb";
  }
  c = 333;

  bbb() {}
}
console.log(new A());
