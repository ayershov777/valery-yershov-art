import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './HomePage';
import CollectionPage from './CollectionPage';
import HistoryPage from './HistoryPage';
import TechniquePage from './TechniquePage';
import ContactPage from './ContactPage';
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
          <Route exact path="/collections" component={CollectionPage} />
          <Route exact path="/technique" component={TechniquePage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;