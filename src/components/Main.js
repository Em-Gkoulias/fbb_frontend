import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {Route, Switch} from 'react-router-dom'

import '../styles/Main.scss';

const Main = (params) => {
  return (
    <>
      <Switch>
        {/* <Route path="/g">
          <Header />
        </Route> */}
        <Route>
          <Header />
          <h2>WELCOME TO THE MAIN PAGE</h2>
          <Footer />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
