

let defaultState={
    list:[],
    Recipe:null
}

const mainReducer=(state=defaultState,action)=>{
    switch (action.type) {
      case "GET_RECIPIES":
        return{
            ...state,
            list:action.list
        }

      case "GET_RECIPIE":
        return{
            ...state,
            Recipe:action.Recipe
        }
        
      default:
        return{
            ...state
        }

    }
}

export default mainReducer;
