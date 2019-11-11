import React, { Component } from 'react'

export class TodosItem extends Component {
    render() {
        return (
            <li>
                {this.props.todo.title}
            </li>
        )
    }
}

export default TodosItem
