import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import './css/theme.css';
import './App.css';


import Navigation from './components/Navigation';
import RandomPin from './components/RandomPin';
import Search from './components/PinSearch';
import Test from './components/Test';


function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={RandomPin} />
      <Route path="/api/pin/search/:query" component={Search} />
      <Route path="/test" component={Test} />
    </Router> 


  );
}

export default App;
