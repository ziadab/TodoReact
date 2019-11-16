import React, { Component } from 'react'

export class AddToDo extends Component {

    state = {
        title: ""
    }

    onChange = (e) => { this.setState({[e.target.name]: e.target.value})}
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input value={this.state.title} name="title" type="text" placeholder="Add Todo..." style={{flex: "10"}}  onChange={this.onChange}/>
                <input type="submit" style={{flex: "1"}}/>
            </form>
        )
    }
}

export default AddToDo
