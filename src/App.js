import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home'
import Person from './components/Person'
import Navbar from './components/NavBar'

export default function App() {
  
  const [title, setTitle] = useState('Home')

  function handleTitle() {
    setTitle(title==='Home'?'Person':'Home')
  }

  return (
        <Router>
          <Navbar title={title} handleTitle={handleTitle}/>
          <Switch>
              <Route exact path="/">
                <Home handleTitle={handleTitle}/>
              </Route>
              <Route path="/home" >
                <Home handleTitle={handleTitle} />
              </Route>
              <Route path="/person/:username" render={(props) => <Person {...props} />}/>
          </Switch>
        </Router>
        );
  }
