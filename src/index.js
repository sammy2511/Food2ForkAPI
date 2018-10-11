import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Items from './Items'
import Recipe from './Recipe'
import { Route } from 'react-router'
import {createBrowserHistory} from 'history'
import { BrowserRouter as Router} from 'react-router-dom'

//const history = createBrowserHistory();

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/app' component={App} />
        <Route path='/Recipe/:id' component={Recipe} />
      </div>
    </Router>,document.getElementById('root')
)
