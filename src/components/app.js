import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import GalleryEditor from "./galleryEditor";
import Home from "./home";
import Login from "./login/login";
import NavBar from "./navbar";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const { isAuthenticated } = useAuth0();

  const authorizedPages = () => {
    return [
      <Route key="galleryEditor" path="/galleryEditor" component={GalleryEditor}/>
    ];
  }

    return (
      <div className='app'>
        <Router>
          <div>
            <NavBar authorizedPages={authorizedPages}/>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
            {isAuthenticated ? authorizedPages() : null}
          </Switch>
        </Router>
      </div>
    );
  
}
