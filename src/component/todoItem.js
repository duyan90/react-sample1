import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style= {this.getStyle()}>
        <p><input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/> {' '} 
        {title}</p>
        <button style= {btnStyle} onClick = {this.props.deleteTodo.bind(this, id)}>x</button>
      </div>
    )
  }

  getStyle = () =>{
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px dotted #ccc',
        textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
