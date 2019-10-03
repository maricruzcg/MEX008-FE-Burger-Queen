import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import GetIn from '../pages/GetIn';
import Kitchen from '../pages/Kitchen';
import './App.css';


class App extends Component {
  render() {
    return (
        <HashRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />

            <Route path="/Login" component={Login}/>
            <Route path="/GetIn" component={GetIn}/>

            <Route path="/Kitchen" component={Kitchen} />

        </HashRouter>
    );
  }
}

export default App;