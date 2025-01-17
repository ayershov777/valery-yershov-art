import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import ScrollToTop from './ScrollToTop';
import HomePage from './HomePage';
import CollectionsPage from './CollectionsPage';
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
  
  const [backgroundLoading, setBackgroundLoading] = useState(true);

  const [pageData, setPageData] = useState(null);
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      return await response.json();
    }

    // NOTE-TO-SELF:  move this cleanup to the back-end
    function dataArrayToObject(a, cb) {
      let o = {}
      a.forEach(e => {
        delete e._id;
        delete e.__v;
        o[e.title] = e;
        cb && cb(o, e); // cb can include additional reformatting operations
        // delete o[e.title].title;
      });
      return o;
    }
    
    fetchData('/api/v1/collections')
     .then(json => {
       //reorder works

      const priorOrder = [
        json.collections[0].works[8], // sugar and spice
        json.collections[0].works[10], // dolls and crocodiles
        json.collections[0].works[7], // two men with birds
        json.collections[0].works[9], // silk paradise
        json.collections[0].works[1], // desperation (rename to silent)
        json.collections[0].works[0], // humiliation (rename to quiet)
        json.collections[0].works[2], // devastation (rename to void)
        json.collections[0].works[3], // new sensation
        json.collections[0].works[4], // relcalcitrant
        json.collections[0].works[5], // revolutionaries
        json.collections[0].works[6], // the great depression
      ];

      const elementsOrder = [
        json.collections[1].works[0], // ocean master
        json.collections[1].works[4], // feeling threatened
        json.collections[1].works[10], // hippocampus cuda
        json.collections[1].works[1], // elephant bath
        json.collections[1].works[3], // the opportunist
        json.collections[1].works[11], // marine invader
        json.collections[1].works[2], // elements 1
        json.collections[1].works[5], // elements 2
        json.collections[1].works[9], // elements 3
        json.collections[1].works[6], // elements 4
        json.collections[1].works[7], // elements 5
        json.collections[1].works[8] // elements 6
      ];

      const undergroundOrder = [
        json.collections[2].works[0], // rhino territory
        json.collections[2].works[4], // megalodon in the bronx
        json.collections[2].works[2], // mans last friend
        json.collections[2].works[3], // graffiti backed alpha
        json.collections[2].works[1], // siberian hunter, atlantic prey
      ];

      //PLEASE DELETE THIS IF ADDING MORE COLLECTIONS
      json.collections[3] = {
        description: 'not available',
        coverIndex: 0,
        title: 'featured',
        works: [
          json.collections[1].works[0], // ocean master
          json.collections[1].works[4], // feeling threatened
          json.collections[1].works[10], // hippocampus cuda
          json.collections[1].works[1], // elephant bath
          json.collections[1].works[3], // the opportunist
          json.collections[1].works[11], // marine invader
          json.collections[2].works[0], // rhino territory
          json.collections[2].works[4], // megalodon in the bronx
          json.collections[2].works[2], // mans last friend
          json.collections[2].works[3], // graffiti backed alpha
          json.collections[1].works[2], // elements 1
          json.collections[1].works[5], // elements 2
          json.collections[1].works[9], // elements 3
          json.collections[1].works[6], // elements 4
          json.collections[1].works[7], // elements 5
          json.collections[1].works[8] // elements 6
        ]
      }

      json.collections[0].works = priorOrder;
      json.collections[1].works = elementsOrder;
      json.collections[2].works = undergroundOrder;
      
      const collections = dataArrayToObject(json.collections);
      setCollections(collections);
     });

    // fetchData('/api/v1/exhibitions')
    //  .then(json => {
    //   setExhibitions(json.exhibitions);
    //  });

    fetchData('/api/v1/pages')
     .then(json => {
      const pages = dataArrayToObject(json.pages, (o, e) => {
        if(e.texts) {
          const texts = dataArrayToObject(e.texts, (o, e) => o[e.title] = e.text);
          o[e.title].texts = texts;
        }

        if(e.photos) {
          const photos = dataArrayToObject(e.photos, (o, e) => { 
            delete e.photo._id;
            delete e.photo.__v;
            delete e.photo.mainKey;
            delete e.photo.blurKey;
            e.photo.title = e.title;
            o[e.title] = e.photo
          });
          o[e.title].photos = photos;
        }
      });
      setPageData(pages);
     });
  }, []);

  var img = new Image();
  img.onload = () => setBackgroundLoading(false);
  img.src = 'https://valery-yershov-art.s3.amazonaws.com/background.jpg';
  
  return (
    <div
      className={`App${mq.matches ? " App-Desktop" : " App-Mobile"}${width < height ? " App-Portrait" : " App-Landscape"}`}
      style={{
        position: 'absolute',
        top: 0,
        zIndex: -1000,
        minHeight: '100vh',
        width: '100%',
        // ...( backgroundLoading ? {} : { backgroundImage: 'url(https://valery-yershov-art.s3.amazonaws.com/background.jpg)' })
      }}
    >
      <Router>
        <ScrollToTop />
        <NavComponent />
        <Switch>
          <Route exact path="/"> 
            {pageData && <HomePage data={pageData.front} />}
          </Route>

          <Route exact path="/collections">
            {collections && <CollectionsPage collections={collections} />}
          </Route>

          <Route exact path="/collections/:title">
            {collections && <CollectionPage collections={collections} />}
          </Route>
          
          <Route exact path="/technique">
            {pageData && <TechniquePage data={pageData.technique} />}
          </Route>

          <Route exact path="/history">
            {pageData && <HistoryPage data={pageData.history} />}
          </Route>

          {/* <Route exact path="/prior_works">
            {pageData && collections && <PriorWorksPage data={pageData.priorWork} priorWorks={collections['prior']} />}
          </Route> */}

          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;