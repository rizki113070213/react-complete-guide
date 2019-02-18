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
    otherState: 'some other value'
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

  render() {
    return (
      <div className="App">
        <h1>Hello I'm a React App!</h1>
        <button onClick={this.handleClick.bind(this, "Fakhrul")}>Update Person!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.handleClick.bind(this, "Oji")}
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
      </div>
    );
  }
}

export default App;
