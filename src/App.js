
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './css/uom.css';

import LandingPage from './components/LandingPage' 
import submitPage from './components/submitPage'

import Home from './components/home'
class App extends React.Component {
  render() {
    return (

        <Router>
            <div className="uomcontent">
                <div className="page-inner">
                    <div role="main">
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                        </Switch>
                    </div>
                </div>
            </div>

        </Router>

    );
  }
}

export default App;