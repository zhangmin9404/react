import React from 'react';
import ParentChild from "./ParentChild";

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { target: 'zmTest' };
  }

  render () {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )

  }
}
