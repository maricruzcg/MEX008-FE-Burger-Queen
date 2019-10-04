import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import GetIn from '../pages/GetIn';
import Kitchen from '../pages/Kitchen';
import Error from '../pages/Error404';
import './App.css';


class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={GetIn} />
            <Route path="/Menu" component={Home} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Get" component={GetIn}/>
            <Route path="/Kitchen" component={Kitchen} />
            <Route path="*" component={Error} />
        </Switch>

    );
  }
}

export default App;