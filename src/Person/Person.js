import React from "react"
import "./Person.css"

const person = (props) => {
  return (
    <div onClick={props.click} className="Person">
      <h1>I'm {props.name} and I'm {props.age} years old!</h1>
      <p>{props.children}</p>
      {props.name === "Ruli" || props.name === "Fakhrul" || props.name === "Oji" || props.name === "Mita" ?
          null :
          <input type="text" placeholder="New Name" onChange={props.change}/>
      }
    </div>
  )
}

export default person
