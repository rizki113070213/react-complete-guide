import React from "react"
import "./Person.css"
import Radium from "radium"

const person = (props) => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</h1>
      <input type="text" onChange={props.change} placeholder="New Name" value={props.value} />
    </div>
  )
}

export default Radium(person)
