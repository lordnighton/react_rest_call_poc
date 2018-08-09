import React from "react";

class Relations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.relations.map(function(listValue) {
          return (
            <div key={listValue.id}>
              {listValue.title} = {listValue.id}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Relations;
