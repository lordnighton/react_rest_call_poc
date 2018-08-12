import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TabsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.info('Submit ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
export default TabsForm;
