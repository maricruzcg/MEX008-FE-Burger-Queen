import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
        </BrowserRouter>
    );
  }
}

export default App;