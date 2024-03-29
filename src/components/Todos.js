import React from "react";
import TodosItem from "./TodosItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodosItem del={this.props.del} todo={todo} key={todo.id} markDone={this.props.markDone} />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
