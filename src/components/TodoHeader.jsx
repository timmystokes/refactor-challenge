import React from "react";

class TodoHeader extends React.Component {
  
  // call parent function passed down through props
  toggleTimer = () => {
    if (typeof this.props.toggleTimer === "function") this.props.toggleTimer();
  }

  render() {
    return (
      <header>
        <h1>Todo list</h1>
        <button onClick={this.toggleTimer}>Toggle Timer</button>
      </header>
    );
  }
}

export default TodoHeader;
