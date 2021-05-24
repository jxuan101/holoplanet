import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Idolbar from './components/idolbar';
import Navbar from './components/navbar';
import Home from './components/pages';
import Videos from './components/pages/videos';
import Live from './components/pages/live';
import Settings from './components/pages/settings';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Idolbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/videos' component = {Videos} />
        <Route path = '/live' component = {Live} />
        <Route path = '/settings' component = {Settings} /> 
      </Switch>
    </Router>
  )
}