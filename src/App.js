import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    // DONT DO THIS this.state.persons[0].name = "Maxmiliam"
    this.setState({
     persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
     persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }



    return (
      <div className="App">
      <h1> React </h1>
      <p>This really working </p>

      <button style={style}
       onClick={this.togglePersonsHandler} >Switch Name</button>

       {persons}

      </div>
    );
  }
}

export default App;
