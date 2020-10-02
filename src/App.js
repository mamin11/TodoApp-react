import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/Header'
import About from './components/pages/About'
// import {v4 as uuid} from 'uuid'
import Axios from 'axios';

class App extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
  }

  //mark complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })})
  }

  //delete todo
  delete = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  //add todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   state: false
    // }
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false 
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}) )
    
  }

  render() {
      return (
        <Router>
            <div className="App">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todo todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}></Todo>
              </React.Fragment>               
            )} />

            <Route path="/about" component={About} />

          </div>
        </Router>
      );
    }
}

export default App;
