import React from 'react';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header info='Esto será la navbar.' dato='Ambos textos se enviaron cómo props desde el padre app.js.'/>
    </div>
  );
}

export default App;

// getNavLinkClass = (path) => {
    //     return this.props.location.pathname === path ? 'active' : '';
    // }
