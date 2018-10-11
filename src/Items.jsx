import React , { Component } from 'react'
import './App.css'
import {createBrowserHistory} from 'history'
import {withRouter} from 'react-router-dom';
const history = createBrowserHistory();

class Item extends Component {
  constructor(props) {
    super(props);
  }



  navigateToRecipe(recipe_id){
    this.props.history.push(`/Recipe/${recipe_id}`);

  }

  render(){

    const { recipes } = this.props;
    return(
      recipes != null ?
      <div>
        {
          recipes.map((recipe,key) => {
            console.log(recipe);
            const imgUrl = recipe.image_url;
            return(
              <div
                key = {key}
                className = "recipe"
                onClick = {this.navigateToRecipe.bind(this,recipe.recipe_id)}
                >
                  <img
                    src = {imgUrl}
                    className = "recipe-img"
                    alt = "reciepe"
                  />
                  <p className="recipe-text">
                    {recipe.title}
                  </p>
                </div>
            )
          })
        }
      </div>:<div></div>
    )
  }
}

export default withRouter(Item);
