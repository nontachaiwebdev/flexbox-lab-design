import React, { Component } from 'react';
import RestaurantDetail from './RestaurantDetail'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/restaurant" component={RestaurantDetail}/>
        </div>
      </Router>    
    )
  }
}

export default App;
