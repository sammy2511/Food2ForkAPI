import React , { Component } from 'react'
import './App.css'
import {Button } from 'react-bootstrap'
import {createBrowserHistory} from 'history'
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'
const history = createBrowserHistory();

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state ={
      recipe_id:this.props.match.params.id,
      recipe:null
    }
  }

  componentWillMount() {
    //const api_key = '737fa842da3e4ce9dd0d1e17f18c3ee4';
    //const api_key = 'ad17603f8f92f364499257a5b80ad36e';
    const api_key = 'd3ab033003c2e546e131f5b45402e3e9';
    const baseUri = `https://www.food2fork.com/api/get?key=${api_key}&rId=${this.state.recipe_id}`;
    console.log(baseUri);

    fetch(baseUri)
    .then(response => response.json())
    .then(json => {
      const { recipe } = json;
      this.setState({ recipe })
    })
 }

 backHome(){
   this.props.history.push('/');
 }


  render(){
    const { recipe } = this.state;

    return(
      recipe !== null ?
      <div>
        <div className="container">
          <div className="jumbotron">
            <h2>{recipe.title}</h2>
            <div className="dish-image" align="center">
              <img className="img-thumbnail"
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
              <span>Social Rank: {recipe.social_rank}</span><br />
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

export default withRouter(Recipe);
