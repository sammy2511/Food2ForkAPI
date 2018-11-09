import React, { Component } from 'react';
import './App.css'
import {Link} from 'react-router-dom'

class NotFound extends Component{


  render(){
    return(
      <div className="App">
        <h1>Opps!!! Page not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default NotFound;
