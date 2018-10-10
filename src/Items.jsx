import React , { Component } from 'react'
import './App.css'

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { recipes } = this.props;
    return(
      recipes != null ?
      <div>
        {
          recipes.map((recipe,key) => {
            const imgUrl = recipe.image_url;
            return(
              <div
                key = {key}
                className = "recipe"
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
      </div>:<div>Empty Div</div>
    )
  }
}

export default Item;
