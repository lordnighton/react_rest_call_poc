import React from 'react';
import axios from 'axios';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {contacts: [], isRequestPerformed: false};
  }

  handleClick() {
    if (!this.state.isRequestPerformed) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts,
          isRequestPerformed: true
        });

        // store the new state object in the component's state
        this.setState(newState);
        console.log(response);
      })
      .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div onClick={(e) => this.handleClick(e)}>
        <h1>Hello World to {this.state.contacts.length} customers</h1>

        {this.state.contacts.map(function(listValue){
          return <div key={listValue.id}>{listValue.name}</div>;
        })}
      </div>
    )
  }
}
export default HelloWorld;
