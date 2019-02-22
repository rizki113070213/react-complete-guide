import React from "react"
import classes from "./Cockpit.css"

const cockpit = (props) => {
  const buttonText = props.showPersons ? "Hide Person!" : "Show Person!"
  let assignedClasses = []
  let btnClass = ""

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return(
    <div className={classes.Cockpit}>
      <h1>Hello I'm a React App!</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>{buttonText}</button>
    </div>
  )
}

export default cockpit
