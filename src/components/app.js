import React, { Component } from 'react';

import GalleryEditor from "./galleryEditor";
import Home from "./home";
import Login from "./login/login";
import NavBar from "./navbar";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: false
    };
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  }

  changeLoginStatus() {
    this.setState({
      loginStatus: !this.state.loginStatus
      
    })
    console.log('changed status')    
  }

  checkLoginStatus() {
    console.log(this.state.loginStatus)
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key="galleryEditor" path="/galleryEditor" component={GalleryEditor}/>
    ];
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <p>nav container pass down login props, ternary to determine if galleryEditor and logout are seen</p>
            <NavBar loginStatus={this.state.loginStatus} changeLoginStatus={this.changeLoginStatus}/>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/login" render={props => (
              <Login {...props} changeLoginStatus={this.changeLoginStatus}/>
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
