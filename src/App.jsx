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
    const api_key  = '737fa842da3e4ce9dd0d1e17f18c3ee4';
    const searchQuery = encodeURIComponent(this.state.query);
    const baseUri = `https://www.food2fork.com/api/search?key=${api_key}&q=${searchQuery}`;
    //REST Call
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(baseUri)
    .then(response => response.json())
    .then(json =>{
      const { recipes } = json;
      this.setState({recipes});
    })
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
