import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import GetIn from '../pages/GetIn';
import './App.css';


class App extends Component {
  render() {
    return (
        <HashRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Login" component={Login}/>
            <Route path="/GetIn" component={GetIn}/>
        </HashRouter>
    );
  }
}

export default App;