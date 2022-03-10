import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import { Home, Background, Projects, Contact } from './pages';
import { Header, Footer, FooterButton } from './layout';

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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <FooterButton />
        <Footer />
      </>
    );
  }
  
  export default App;
