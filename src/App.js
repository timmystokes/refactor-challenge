import React from "react"
import moment from "moment";
import "./App.css";

import TodoHeader from "./components/TodoHeader";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    // removed binding of this to functions. No longer necessary with ES6 Arrow function syntax.
    this.state = { todoItems: [], showTimer: false };
  }

  addItem = todoItem => {
    const { todoItems } = this.state;
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      date: moment().format("ll"),
      done: false
    });
    this.setState({ todoItems });
  }

  removeItem = itemIndex => {
    const { todoItems } = this.state;
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems });
  }

  markTodoDone = itemIndex => {
    const { todoItems } = this.state;
    const todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems });
  }

  // method to update the state, passed down to TodoHeader via props
  toggleTimer = () => this.setState({ showTimer: !this.state.showTimer })

  render() {
    return (
      <div id="main">
        <TodoHeader toggleTimer={this.toggleTimer} />
        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App
