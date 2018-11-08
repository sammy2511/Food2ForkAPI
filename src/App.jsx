import React, { Component } from 'react';
import {FormGroup , FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Cookies from 'universal-cookie';
import Items from './Items'
import './App.css'
const cookies = new Cookies();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      recipes:null
    }
  }

  searchRecipes(){
    const api_key  = process.env.API_KEY;
    const searchQuery = encodeURIComponent(this.state.query);
    const baseUri = `https://www.food2fork.com/api/search?key=${api_key}&q=${searchQuery}`;
    //REST Call
    var myOptions = {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
    };
    fetch(baseUri,myOptions)
    .then(response => response.json())
    .then(json =>{
      const { recipes } = json;
      this.setState({recipes});
    })
  }

  render(){
    return(
      <div className="container App">
        <h1 className = 'App-title'>Tasty Table Delights</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type = "text"
              placeholder = "Search by Dish or Ingredient"
              value = {this.state.query}
              onChange = {event => {this.setState({query:event.target.value})}}
              onKeyPress = {
                event => {
                  if(event.key == 'Enter'){
                    this.searchRecipes()
                  }
                }
              }/>
              <InputGroup.Addon onClick = {()=>this.searchRecipes()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>

          </InputGroup>
        </FormGroup>
      <Items
        recipes = {this.state.recipes}
        ></Items>
      </div>
    )
  }
}

export default App;
