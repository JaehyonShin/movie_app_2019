import React from 'react';
import PropTypes from 'prop-types'; //  prop-types 설치 : npm i prop-types => 내가 전달 받은 props가 내가 원하는 props인지를 확인  #2.4 Protection with PropTypes

function Food({name,picture,rating}){
  return <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src = {picture} ></img>
  </div>

}


Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};


const foodILike = [
      { id : 1,
        name : "kimchi",
        rating : 5,
        Image : "https://www.thespruceeats.com/thmb/MYAfoHm73dYZOmwxFdVzZoXCwvU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"
      },
      {  id : 2,
        name : "kimchi2",
        rating : 4.9,
        Image : "https://www.thespruceeats.com/thmb/MYAfoHm73dYZOmwxFdVzZoXCwvU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"
      },
      {  id : 3,
        name : "kimchi3",
        rating : 4.8,
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
          {foodILike.map(dish => <Food key={dish.id}
                                       name={dish.name} 
                                       picture={dish.Image} 
                                       rating = {dish.rating}></Food>)}
    </div>
    
  );
}

export default App;
