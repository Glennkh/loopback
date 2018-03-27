import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Main />
    </div>
  </div>
);

export default App;
