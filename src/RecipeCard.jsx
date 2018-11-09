import React, { Component } from 'react';
import './App.css'
import Loading from './Loading'
import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js"
import {Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom';

let recipe = null;

class RecipeCard extends Component{
  constructor(props) {
    super(props);
    this.state ={
      loading:true,
      recipe_id:this.props.match.params.id,
      recipe:null
    }
  }

  componentWillMount() {
      this.props.loadSingleRecipe(this.state.recipe_id);
 }

 componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 800);
 }

 backHome(){
   this.props.history.push('/');
 }

  render(){
    if(this.props.Recipe !== null){
      recipe = this.props.Recipe;
    }
    if(this.state.loading){
      return(
        <Loading />
      )
    }
    return(
      <div class="card-container">
        <div class="card u-clearfix">
          <div class="card-body">
            <span class="card-number card-circle subtle">01</span>
            <span class="card-author subtle">{recipe.publisher}</span>
            <h2 class="card-title">{recipe.title}</h2>
            <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
              <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
              <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
            <div class="card-read">Directions</div>
          </div>
          <img src={recipe.image_url} alt="" class="card-media" />
        </div>
        <div class="card-shadow"></div>

      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    console.log('mapToProps',state);
    return state
};

export default withRouter(connect(mapStateToProps,actionCreators)(RecipeCard));
