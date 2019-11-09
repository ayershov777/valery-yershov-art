import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './HomePage';
import NavComponent from './NavComponent';

import useWindowSize from '../hooks/windowSize';

import './App.css';

function App() {
  const mq = window.matchMedia("(min-device-width: 1367px)");
  const [width, height] = useWindowSize();
  
  return (
    <div className={`App${mq.matches ? " App-Desktop" : " App-Mobile"}${width < height ? " App-Portrait" : " App-Landscape"}`}>
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;