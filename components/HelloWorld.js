import React from "react";
import axios from "axios";
import Profile from "./Profile";
import Relations from "./Relations";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import 'react-tabs/style/react-tabs.css';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      contacts: [],
      relations: [],
      isProfileRequested: false,
      isRelationsRequested: false
    };
  }

  requestProfiles() {
    if (!this.state.isProfileRequested) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          const newContacts = response.data.map(c => {
            return {
              id: c.id,
              name: c.name
            };
          });

          const newState = Object.assign({}, this.state, {
            contacts: newContacts,
            isProfileRequested: true
          });

          this.setState(newState);
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }

  requestRelations() {
    if (!this.state.isRelationsRequested) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          const newRelations = response.data.map(c => {
            return {
              id: c.id,
              title: c.title,
              completed: c.completed
            };
          });

          const newState = Object.assign({}, this.state, {
            relations: newRelations,
            isRelationsRequested: true
          });

          this.setState(newState);
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }

  componentDidMount() {
    this.requestProfiles();
    this.requestRelations();
  }

  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => this.setState({ tabIndex })}
      >
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel>
          <Profile contacts={this.state.contacts} />
        </TabPanel>
        <TabPanel>
          <Relations relations={this.state.relations} />
        </TabPanel>
      </Tabs>
    );
  }
}
export default HelloWorld;
