// import React from 'react';
// import Header from './components/header'

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Agregar from '../components/agregar'
import Home from '../components/home'
import Nav from "../components/Navbar"
import Username from "../components/Username"
import './App.css';
import Background from '../components/Background';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Background />
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/agregar" component={Agregar} />
          </div>
        </BrowserRouter>
        <Username />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header info='Esto será la navbar.' dato='Ambos textos se enviaron cómo props desde el padre app.js.'/>
//     </div>
//   );
// }

// export default App;
