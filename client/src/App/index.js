import React, { useState, useEffect } from 'react';
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
import PriorWorksPage from './PriorWorksPage';
import NavComponent from './NavComponent';

import useWindowSize from '../hooks/windowSize';

import './App.css';

function App() {
  const mq = window.matchMedia("(min-device-width: 1367px)");
  const [width, height] = useWindowSize();

  const [pageData, setPageData] = useState({});
  const [collections, setCollections] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      return await response.json();
    }

    // NOTE-TO-SELF:  move this logic to the back-end
    function dataArrayToObject(a, cb) {
      let o = {}
      a.forEach(e => {
        delete e._id;
        delete e.__v;
        o[e.title] = e;
        cb && cb(o, e); // cb can include additional reformatting operations
        delete o[e.title].title;
      });
      return o;
    }
    
    fetchData('/api/v1/collections')
     .then(json => {
      const collections = dataArrayToObject(json.collections);
      setCollections(collections);
     });

    fetchData('/api/v1/exhibitions')
     .then(json => {
      setExhibitions(json.exhibitions);
     });

    fetchData('/api/v1/pages')
     .then(json => {
      const pages = dataArrayToObject(json.pages, (o, e) => {
        if(e.texts) {
          const texts = dataArrayToObject(e.texts, (o, e) => o[e.title] = e.text);
          o[e.title].texts = texts;
        }

        if(e.photos) {
          const photos = dataArrayToObject(e.photos, (o, e) => o[e.title] = e.photo);
          o[e.title].photos = photos;
        }
      });
      setPageData(pages);
     });
  }, []);
  
  return (
    <div className={`App${mq.matches ? " App-Desktop" : " App-Mobile"}${width < height ? " App-Portrait" : " App-Landscape"}`}>
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path="/"> 
            <HomePage data={pageData.front} />
          </Route>

          <Route exact path="/collections/:title">
            <CollectionPage collections={collections} />
          </Route>
          
          <Route exact path="/technique">
            <TechniquePage data={pageData.technique} />
          </Route>

          <Route exact path="/history">
            <HistoryPage data={pageData.history} exhibitions={exhibitions} />
          </Route>

          <Route exact path="/prior_works">
            <PriorWorksPage data={pageData.priorWork} priorWorks={collections['prior']} />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;