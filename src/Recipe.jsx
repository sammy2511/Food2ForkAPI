import React , { Component } from 'react'
import './App.css'
import {Button } from 'react-bootstrap'
import {createBrowserHistory} from 'history'
import {withRouter} from 'react-router-dom';
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
    const api_key = 'ad17603f8f92f364499257a5b80ad36e';
    const baseUri = `https://www.food2fork.com/api/get?key=${api_key}&rId=${this.state.recipe_id}`;
    console.log(baseUri);

    fetch(baseUri)
    .then(response => response.json())
    .then(json => {
      const { recipe } = json;
      this.setState({ recipe })
    })
 }

 navigateHome(){
   this.props.history.push('/app');
 }


  render(){
    const { recipe } = this.state;

    return(
      recipe !== null ?
      <div className="col-xs-12 cardcont App ">
       <div className=" col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
         <h1>{recipe.title}</h1>
         <span className="tagline"><a href={recipe.source_url}>{recipe.source_url}</a></span>
         <div className="additional-details">
           <span>Ingredients</span>
           <ul>
             {
               recipe.ingredients.map((item,key) =>{
                 return(
                   <li key = {key}>{item}</li>
                 )
               })
             }
           </ul>
           <div className="row ">
             <div className="col-xs-6"> Social Rank: <span >{recipe.social_rank}</span></div>
             <div className="col-xs-6"> Publisher: <span > {recipe.publisher}</span> </div>
             <div className="col-xs-6"> Publisher Site: <span ><a href={recipe.publisher_urls}>{recipe.publisher_url}</a></span></div>
           </div>
         </div>
         <Button className="btn btn-primary"
           onClick= {this.navigateHome}>Go Back</Button>
       </div>
       <div className="poster-container  col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
         <img id="postertest" className='poster' src={recipe.image_url}/>
       </div>
     </div> :
      <div></div>
    )
  }
}

export default withRouter(Recipe);
