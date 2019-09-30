import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import './App.css';


class App extends Component {
  render() {
    return (
        <HashRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
        </HashRouter>
    );
  }
}

export default App;