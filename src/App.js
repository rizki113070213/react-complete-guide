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

  handleClick(newName) {
    this.setState({
      persons: [
        {name: newName, age: 35},
        {name: "Rizki", age: 32},
        {name: "Mita", age: 30}
      ]
    })
  }

  handleChange(event) {
    this.setState({
      persons: [
        {name: "Ruli", age: 35},
        {name: event.target.value, age: 32},
        {name: "Mita", age: 30}
      ]
    })
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

    return (
      <div className="App">
        <h1>Hello I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>{this.state.showPersons ? "Hide Person!" : "Show Person!"}</button>
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.handleClick.bind(this, "Fakhrul")}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                change={this.handleChange.bind(this)}
              />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}>My hobby is cooking
              </Person>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
