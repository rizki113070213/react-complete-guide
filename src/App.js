import React from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      {id: 1, name: "Ruli", age: 35},
      {id: 2, name: "Rizki", age: 32},
      {id: 3, name: "Mita", age: 31}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid #00f',
      padding: '8px',
      cursor: 'pointer'
    }

    const buttonText = this.state.showPersons ? "Hide Person!" : "Show Person!"
    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.changeHandler(event, person.id)}
              />)}
            )
          }
        </div>
      )

      style.backgroundColor = "red"
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hello I'm a React App!</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>{buttonText}</button>
        {persons}
      </div>
    );
  }
}

export default App;
