import React from "react";
import Todos from "./components/Todos";

class App extends React.Component {
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
        <header>
          <Todos todos={this.state.todos} markDone={this.markDone} />
        </header>
      </div>
    );
  }
}

export default App;
