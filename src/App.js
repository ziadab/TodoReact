import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header"
import AddToDo from "./components/AddToDo";
import uuid from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/pages/About"

class App extends React.Component {

  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      title: title,
      id: uuid.v4(),
      done: false
    }
    this.setState({todos : [...this.state.todos, newTodo]})
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
        id: uuid.v4(),
        title: "Press F to pay respect",
        done: false
      },
      {
        id: uuid.v4(),
        title: "Toxicity",
        done: false
      },
      {
        id: uuid.v4(),
        title: "PSY",
        done: false
      }
    ]
  };

  render() {
    //console.log(this.state.todos)
    return (
      <Router>
        <div>
          <Header/>
          <Route path="/" exact render={props => (
            <React.Fragment>
              <AddToDo addTodo={this.addTodo}/>
              <Todos del={this.del} todos={this.state.todos} markDone={this.markDone} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
