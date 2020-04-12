import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//     <label htmlFor="bar">bar</label>
//     <input type="text" onChange={() => {console.log("I am clicked")}}/>
//     </React.Fragment>
//   );
// }

const App = () =>{
  const profiles = [
    {
      name: "tt", age: 10
    },
    {
      name: "hana", age: 5
    }
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    <User name={"tt"} gae={10}/>
    </div>
    )
}

const User = (props) => {
  return (
    <div>Hi, T am {props.name} and {props.age} years old</div>
  )
}

User.defaultProps ={
  age: 1
}

export default App;
