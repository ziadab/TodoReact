import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header"
import AddToDo from "./components/AddToDo";

class App extends React.Component {

  addTodo = (title) => {
    console.log(title);
  }

  del = (id) => {
    console.log(`u click me piece of shit ${id}`)
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]})
  }

  markDone = id => {
    //console.log(`Thla! hmm ${id}`);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    });
  };

  state = {
    todos: [
      {
        id: 1,
        title: "Press F to pay respect",
        done: false
      },
      {
        id: 2,
        title: "Toxicity",
        done: false
      },
      {
        id: 3,
        title: "PSY",
        done: false
      }
    ]
  };

  render() {
    //console.log(this.state.todos)
    return (
      <div>
        <Header/>
        <AddToDo addTodo={this.addTodo}/>
        <header>
          <Todos del={this.del} todos={this.state.todos} markDone={this.markDone} />
        </header>
       
      </div>
    );
  }
}

export default App;
