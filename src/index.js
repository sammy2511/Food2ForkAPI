import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Recipe from './Recipe'
import NotFound from './NotFound'
import Card from './RecipeCard'
import { Route } from 'react-router'
import { BrowserRouter as Router,Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
let store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store = {store}>
  <Router>
      <div>
        <Switch>
          <Route  path='/' exact component={App} />
          <Route path='/Recipe/:id' component={Recipe} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
  ,document.getElementById('root')
)
