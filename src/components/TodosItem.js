import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodosItem extends Component {

    getStyle = () => {
        return {
            margin: 0,
            textDecoration: this.props.todo.done ? "line-through": "none",
            backgroundColor: "#282c34",
            color: '#fff    '
        }
    }

    render() {
        return (
            <p style={this.getStyle()}>
                {this.props.todo.title}
            </p>
        )
    }
}

TodosItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodosItem
