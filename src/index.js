import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Items from './Items'
import Recipe from './Recipe'
import NotFound from './NotFound'
import { Route } from 'react-router'
import {createBrowserHistory} from 'history'
import { BrowserRouter as Router,Switch} from 'react-router-dom'

//const history = createBrowserHistory();

ReactDOM.render(
  <Router>
      <div>
        <Switch>
          <Route  path='/' exact component={App} />
          <Route path='/Recipe/:id' component={Recipe} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>,document.getElementById('root')
)
