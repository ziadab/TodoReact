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
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markDone.bind(this, id)}
          />{" "}
          {title}
          <button style={deleteStyle}>x</button>
        </p>
      </div>
    );
  }
}
const deleteStyle = {
  backgroundColor: "#ED5E68",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  float: "right",
  padding: "10px 20px"
};
TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodosItem;
