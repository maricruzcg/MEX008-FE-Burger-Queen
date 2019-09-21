import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Menu from '../components/Menu';
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

// function App() {
//   return (
//     <div className="App">
//       <Header info='Esto será la navbar.' dato='Ambos textos se enviaron cómo props desde el padre app.js.'/>
//     </div>
//   );
// }

// export default App;
