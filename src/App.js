import React from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      {name: "Ruli", age: 35},
      {name: "Rizki", age: 32},
      {name: "Mita", age: 31}
    ],
    otherState: 'some other value',
    showPersons: false
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
    // this.setState(prevState => {
    //   return {showPersons: !prevState.showPersons}
    // })
  }

  render() {
    const style = {
      backgroundColor: 'aqua',
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
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />)}
            )
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>{buttonText}</button>
        {persons}
      </div>
    );
  }
}

export default App;
