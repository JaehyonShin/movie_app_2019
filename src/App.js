import React from 'react';
import PropTypes from 'prop-types'; //  prop-types 설치 : npm i prop-types => 내가 전달 받은 props가 내가 원하는 props인지를 확인  #2.4 Protection with PropTypes

class App extends React.Component{ //클래스 컴포넌트

    state = {
      count : 0
    };

    add = () => {
      this.setState(current => ({ count: current.count +1 }))  //자동으로 render를 다시 실행 (변경되는 부분만)
    };
    minus = () => {
      this.setState(current => ({ count: current.count -1 })) //자동으로 render를 다시 실행 (변경되는 부분만)
    };

    render() { //리액트는 자동적으로 모든 class component의 render 메소드를 실행하고자 함
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
