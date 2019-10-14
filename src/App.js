import React from 'react';

function Food({fav,some}){
  return <h1>I like {fav} {some}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Food fav="kimchi" some="123" />
      <Food   some="123" />
      <Food fav="sangiopsal"   />
      <Food fav="chukumi"  some="123" />
    </div>
    
  );
}

export default App;
