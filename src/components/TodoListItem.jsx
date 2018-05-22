import React from "react";

// avoids usage of magic number & eslint warning about missing radix argument for parseInt
const RADIX = 10;

class TodoListItem extends React.Component {

  // call function passed down from parent components
  removeItem = () => {
    var index = parseInt(this.props.index, RADIX);
    this.props.removeItem(index);
  }

  // call function passed down from parent components
  markTodoDone = () => {
    var index = parseInt(this.props.index, RADIX);
    this.props.markTodoDone(index);
  }

  render() {
    var todoClass = this.props.item.done ? "todoItem done" : "todoItem undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.markTodoDone}
          />
          <span>{this.props.item.value}</span>
          <span className="date">{`Added: ${this.props.item.date}`}</span>
          <button type="button" className="close" onClick={this.removeItem}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
