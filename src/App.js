import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import AnimatedMouse from './components/animatedMouse/animatedMouse.component';
import Header from './components/header/header.component';
import Home from './pages/home/home.page';
import Profile from './pages/profile/profile.page';
import Works from './pages/works/works.page';
import WorkDetal from './pages/work-detail/work-detail.page';

import './styles/base.scss';

function App() {
  return (
    
    <Router>
      <ScrollToTop>
      <AnimatedMouse />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/works' render={routeProps => <Works {...routeProps} />} />
        <Route exact path='/works/:title' render={routeProps => <WorkDetal {...routeProps} />} />
      </Switch>
      </ScrollToTop>
    </Router>
    
  );
}

export default App;
