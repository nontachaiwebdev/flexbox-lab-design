import React, { Component } from 'react';
import RestaurantDetail from './RestaurantDetail'
import Favorite from './Favorite'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
	  <Route path='/restaurant' component={RestaurantDetail}/> 
	  <Route path='/favorite' component={Favorite} />
        </div>
      </Router>    
    )
  }
}

export default App;
