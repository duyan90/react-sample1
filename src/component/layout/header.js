import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <header style = {headerStyle}>
        <h1>To do list</h1>
        <Link to='/' style= {headerStyle}>Home</Link> |  <Link to='/about' style= {headerStyle}>About</Link>
      </header>
     
    )
  } 
}
const headerStyle = {
      backgroundColor: '#333',
      textAlign: 'center',
      padding: '10px',
      color: '#fff',
      textDecoration: 'none'
}
