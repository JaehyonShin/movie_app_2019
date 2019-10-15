import React from 'react';

function Food({fav,some,picture}){
  return <div>
    <h1>I like {fav} {some}</h1>
    <img src = {picture} ></img>
  </div>
  
  
  
}

const foodILike = [
      {
        name : "kimchi",
        Image : "https://www.thespruceeats.com/thmb/MYAfoHm73dYZOmwxFdVzZoXCwvU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"
      },
      {
        name : "kimchi2",
        Image : "https://www.thespruceeats.com/thmb/MYAfoHm73dYZOmwxFdVzZoXCwvU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"
      },
      {
        name : "kimchi3",
        Image : "https://www.thespruceeats.com/thmb/MYAfoHm73dYZOmwxFdVzZoXCwvU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"
      }
    
    ]

//하나씩 렌더링 하는 방법
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Food fav="kimchi" some="123" />
//       <Food   some="123" />
//       <Food fav="sangiopsal"   />
//       <Food fav="chukumi"  some="123" />
//     </div>
    
//   );
// }


// 여러개 렌더링 방법
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {foodILike.map(dish => <Food fav={dish.name} picture={dish.Image}></Food>)}
    </div>
    
  );
}

export default App;
