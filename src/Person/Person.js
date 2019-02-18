import React from "react"

const person = (props) => {
  return (
    <div onClick={props.click}>
      <h1>I'm {props.name} and I'm {props.age} years old!</h1>
      <p>{props.children}</p>
      <input type="text" placeholder="New Name" onChange={props.change}/> :
    </div>
  )
}

export default person
