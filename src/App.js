import React from 'react';
import PropTypes from 'prop-types'; //  prop-types 설치 : npm i prop-types => 내가 전달 받은 props가 내가 원하는 props인지를 확인  #2.4 Protection with PropTypes

class App extends React.Component{ //클래스 컴포넌트
    state = {
      isLoading : true,
      movie : []
    };

    componentDidMount(){
      setTimeout(()=>{
        this.setState({isLoading : false})
      },6000);
    }
    render() {
      const { isLoading } = this.state;
      return <div>{ isLoading ? "Loading..." : "We are ready"}</div>;
    }
}

export default App;
