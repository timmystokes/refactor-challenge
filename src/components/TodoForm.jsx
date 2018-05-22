import React from "react";

// jQuery removed

class TodoForm extends React.Component {
  
  componentDidMount() {
    // cache reference to item name node        
    this.itemNameNode = document.getElementById("itemName");
    this.itemNameNode.focus();
  }

  // refactored to handleSubmit instead of addItem because event must be prevented
  handleSubmit = event => {
    event.preventDefault();
    // var changed to const for lexical scoping and because it is not reassigned.
    const newItemValue = this.itemNameNode.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      document.getElementById("todoForm").reset();
    }
  }
  
  render() {
    return (
      <form
        ref="form"
        id="todoForm"
        onSubmit={this.handleSubmit}
        className="form-inline"
      >
        <input
          type="text"
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
