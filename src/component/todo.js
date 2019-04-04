import React, { Component } from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types';

export default class Todo extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo = {this.props.deleteTodo}/>
    ));
  } 
}
Todo.propTypes = {
      todos: PropTypes.array.isRequired,
      markComplete: PropTypes.func.isRequired,
      deleteTodo: PropTypes.func.isRequired
}