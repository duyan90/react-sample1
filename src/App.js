import React, { Component } from 'react';
import './App.css';
import Todo from './component/todo'
import Header from './component/layout/header';
import AddTodo from './component/addTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './component/pages/about';
import axios from 'axios'
class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response =>{
      this.setState({todos: response.data});
    });
  } 

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render= { props =>(
            <React.Fragment>
              <AddTodo  AddTodo = {this.addTodo}/>
              <Todo todos = {this.state.todos} markComplete={this.markComplete} deleteTodo = {this.deleteTodo}/>
            </React.Fragment>
          )}/>
          <Route path='/about' component= {About}/>  
        </div>
      </Router>
    );
  }

  addTodo = (title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
    }).then((response) =>{
      this.setState({todos: [...this.state.todos, response.data]}); 
    })
  };

  markComplete = (id)=>{
      this.setState({todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = ! todo.completed;
        }
        return todo;
      })
      });   
  };

  deleteTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/{$id}`).then(response =>{
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    });  
  }
}

export default App;
