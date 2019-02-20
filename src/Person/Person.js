import React from "react"
import "./Person.css"

const person = (props) => {
  return (
    <div onClick={props.click} className="Person">
      <h1>I'm {props.name} and I'm {props.age} years old!</h1>
    </div>
  )
}

export default person
