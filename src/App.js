import React from 'react';
import Todos from './components/Todos'


class App extends React.Component{

  state = {
    todos : [
      {
        id: 1,
        title: "Press F to pay respect",
        done: false
      },
      {
        id: 2,
        title: "Toxicity",
        done: true
      },
      {
        id: 3,
        title: "PSY",
        done: false
      }
    ]
  }

  render(){
    //console.log(this.state.todos)
    return (
    
      <div>
        <header>
          <Todos todos={this.state.todos}/>
        </header>
      </div>
    )
  }
}

export default App;
