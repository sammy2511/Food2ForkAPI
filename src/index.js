import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Items from './Items'
import Recipe from './Recipe'
import { Router,Route } from 'react-router'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
      <div>
        <Route path='/' component={App} />
        <Route path='/Recipe' component={Recipe} />
      </div>
    </Router>,document.getElementById('root')
)
