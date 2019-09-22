import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;