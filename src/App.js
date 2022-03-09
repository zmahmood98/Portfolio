import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import { Home, Background, Hobbies, Contact } from './pages';
import { Header, Footer } from './layout';

function App() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/background">
            <Background />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;
