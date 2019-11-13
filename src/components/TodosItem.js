import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodosItem extends Component {
  getStyle = () => {
    return {
      padding: "5px",
      borderBottom: "1px #fff solid",
      textDecoration: this.props.todo.done ? "line-through" : "none",
      backgroundColor: "#282c34",
      color: "#fff    "
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markDone} />{" "}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodosItem;
