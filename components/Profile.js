import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.contacts.map(function(listValue) {
          return <div key={listValue.id}>{listValue.name}</div>;
        })}
      </div>
    );
  }
}
export default Profile;
