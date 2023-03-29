import React, { Component } from "react";

class ClassCounterTwo extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  IncCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.IncCounter}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
