//const api_key  = '737fa842da3e4ce9dd0d1e17f18c3ee4';
const api_key = 'd3ab033003c2e546e131f5b45402e3e9'
export function loadRecipes(query){

    const searchQuery = encodeURIComponent(query);
    const baseUri = `https://www.food2fork.com/api/search?key=${api_key}&q=${searchQuery}`;
    return(dispatch)=>{
        return fetch(baseUri)
        .then((response)=>response.json())
        .then(json =>{
          const { recipes } = json;
          dispatch(listRecipies(recipes));
        })
    }
}

export function loadSingleRecipe(recipeId){

  const baseUri = `https://www.food2fork.com/api/get?key=${api_key}&rId=${recipeId}`;
  return(dispatch) =>{
    return fetch(baseUri)
    .then(response => response.json())
    .then(json => {
      const { recipe } = json;
      dispatch(getRecipe(recipe));
    })
  }
}

export function listRecipies(recipes){
    return{
        type:"GET_RECIPIES",
        list:recipes
    }
}

export function getRecipe(recipe){
  return{
    type:"GET_RECIPIE",
    Recipe:recipe
  }
}
