import React , { Component } from 'react'
import './App.css'
import Loading from './Loading'
import {Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom';

import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js"

let recipe = null;

class Recipe extends Component {
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
      recipe !== null ?
      <div>
        <div className="container">
          <div className="jumbotron">
            <h2>{recipe.title}</h2>
            <div className="dish-image" align="center">
              <img className="img-thumbnail"
              alt='dish'
              src = {recipe.image_url}/>
            </div>
            <div>by: {recipe.publisher}</div>
            <br /><br/>
            <div className="Ingredient">
              <h4>Ingredients</h4>
              <ul>
                {
                  recipe.ingredients.map((item,key) =>{
                    return(
                      <li key= {key}>{item}</li>
                    )
                  })
                }
              </ul>
            </div><br/><br/>
            <div className="other-details">
              <h4>Directions</h4>
              <span>Source: <a href={recipe.source_url}>{recipe.source_url}</a></span><br />
            </div><br/><br/>
            <div className="other-details">
              <h4>References</h4>
              <span>Publisher : {recipe.publisher} </span><br />
              <span>food2fork Reference: <a href={recipe.f2f_url}>{recipe.f2f_url}</a></span><br />
            </div>
            <Button className="btn btn-primary"
              onClick = {()=>this.backHome()}>Go Back</Button>
          </div>
        </div>
      </div>:
      <div></div>
    )
  }
}

const mapStateToProps=(state)=>{
    console.log('mapToProps',state);
    return state
};

export default withRouter(connect(mapStateToProps,actionCreators)(Recipe));
