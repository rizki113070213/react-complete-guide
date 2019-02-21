import React from "react"
import classes from "./Person.css"

const person = (props) => {
  return (
    <div className={classes.Person}>
      <h1 onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</h1>
      <input type="text" onChange={props.change} placeholder="New Name" value={props.value} />
    </div>
  )
}

export default person
