import React from 'react';
import TodosItem from './TodosItem';

class Todos extends React.Component{
    render(){
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <TodosItem
                    todo={todo} 
                    key={todo.id}/>
                ))}
            </ul>
        )
    }
}

export default Todos