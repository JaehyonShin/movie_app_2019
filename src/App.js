import React from 'react';
import PropTypes from 'prop-types'; //  prop-types 설치 : npm i prop-types => 내가 전달 받은 props가 내가 원하는 props인지를 확인  #2.4 Protection with PropTypes

class App extends React.Component{ //클래스 컴포넌트

    constructor(props){ //리액트가 아닌 자바스크립트에서 생성, 가장 처음 작동
      super(props);
      console.log("hello");
    }

    state = {
      count : 0
    };

    add = () => {
      this.setState(current => ({ count: current.count +1 }))  //자동으로 render를 다시 실행 (변경되는 부분만)
    };
    minus = () => {
      this.setState(current => ({ count: current.count -1 })) //자동으로 render를 다시 실행 (변경되는 부분만)
    };

    componentDidMount(){  //첫 render 후 작동
      console.log("component rendered");
    }

    componentDidUpdate(){ //state 변경 후 render 후 작동
      console.log("component Updated");
    }

    componentWillUnmount(){ //컴포넌트 소멸시 작동
      console.log("goodbye, Unmount");
    }

    render() { //리액트는 자동적으로 모든 class component의 render 메소드를 실행하고자 함
      console.log("I'm rendering");
      return (
             <div> 
                  <h1>The number is :  {this.state.count}</h1>
                  <button onClick={this.add}>Add</button>
                  <button onClick={this.minus}>Minus</button>
             </div>
      );
    } 
}

export default App;
