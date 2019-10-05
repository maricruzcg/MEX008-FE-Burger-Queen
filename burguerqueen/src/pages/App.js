import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import GetIn from '../pages/GetIn';
import Kitchen from '../pages/Kitchen';
import Error from '../pages/Error404';
import './App.css';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
>>>>>>> 1e54ba129be373f28f9794a633dedbda7bcb54d2

import Home from './Home';
import Menu from './Menu';
import Login from './Login';
import GetIn from './GetIn';
import Kitchen from './Kitchen';
import Error from './Error404';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={GetIn} />
            <Route path="/Menu" component={Home} />
            <Route path="/Menu" component={Menu} />


            <Route path="/Login" component={Login}/>
            <Route path="/Get" component={GetIn}/>

            <Route path="/Kitchen" component={Kitchen} />
=======
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/Menu'} component={Menu} />
          <Route path={process.env.PUBLIC_URL + '/Login'} component={Login} />
          <Route path={process.env.PUBLIC_URL + '/Getin'} component={GetIn} />
          <Route path={process.env.PUBLIC_URL + '/Kitchen'} component={Kitchen} />
>>>>>>> 1e54ba129be373f28f9794a633dedbda7bcb54d2

          <Route path={process.env.PUBLIC_URL + '*'} component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
