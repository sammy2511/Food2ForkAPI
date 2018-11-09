import React, { Component } from 'react';
import {FormGroup , FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js"
import Items from './Items'
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      recipes:null
    }
  }


  render(){

    return(
      <div className="container App">
      <div class="jumbotron container App-title">
  <h1 class="display-4">Tasty Table Delights</h1>
  <p class="lead">Welcome to Tasty Table Delights.You can search your favorite recipe.</p>
  <hr class="my-4"/>
  <p>You are just one search away from wonderful delights.</p>
</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type = "text"
              placeholder = "Search by Dish or Ingredient"
              value = {this.state.query}
              onChange = {event => {this.setState({query:event.target.value})}}
              onKeyPress = {
                event => {
                  if(event.key === 'Enter'){
                    this.props.loadRecipes(this.state.query)
                  }
                }
              }/>
              <InputGroup.Addon onClick = {()=>{this.props.loadRecipes(this.state.query)}}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>

          </InputGroup>
        </FormGroup>
      <Items
        recipes = {this.props.list}
        ></Items>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log(state);
    return state
};

export default connect (mapStateToProps,actionCreators)(App);
