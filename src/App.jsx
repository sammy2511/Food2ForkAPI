import React, { Component } from 'react';
import {FormGroup , FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
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

  searchRecipes(){
    //const api_key = '737fa842da3e4ce9dd0d1e17f18c3ee4';
    //const api_key = 'ad17603f8f92f364499257a5b80ad36e';
    const api_key = 'd3ab033003c2e546e131f5b45402e3e9';
    const searchQuery = encodeURIComponent(this.state.query);
    const baseUri = `https://www.food2fork.com/api/search?key=${api_key}&q=${searchQuery}`;
    console.log(baseUri);
    //REST Call
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
