import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Kitchen from '../pages/Kitchen';
import Menu2 from '../pages/Menu2';
import './App.css';


class App extends Component {
  render() {
    return (
        <HashRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Kitchen" component={Kitchen} />
            <Route path="/Menu2" component={Menu2} />
        </HashRouter>
    );
  }
}

export default App;