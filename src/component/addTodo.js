import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    title: ''
  }
  render() { return (
     <form style = {formStyle} onSubmit={this.onSubmit}>
       <input type='text' name='title' placeholder='Add To Do ...' style={{flex: '10', padding: '10px'}}
               value = {this.state.title} onChange={this.onChange}/>
       <input type="submit" value="Submit" className='btn' style = {btnStyle}/>
     </form>
    )
  }

  onChange = (e)=>{
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) =>{
    e.preventDefault();
    if(!this.state.title){
      return null;
    }
    this.props.AddTodo(this.state.title);
    this.setState({title: ''});
  }
}

const btnStyle = {
  flex: 1
}

const formStyle = {
  display: 'flex'
}
