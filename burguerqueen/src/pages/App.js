import React, { Component } from 'react';
//import { UserProvider } from '../UserContext'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import './App.css';


class App extends Component {
  render() {
   // const client = { client:'' }

    return (

        <BrowserRouter>
          <div>
            
            <Route path="/Home" component={Home} />
            <Route path="/Menu" component={Menu} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;