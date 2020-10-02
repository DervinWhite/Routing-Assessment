import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

import NoMatch from './components/noMatch/NoMatch';
import Jeopardy from './components/jeopardy/Jeopardy';
function App() {

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          path="/welcome/:name"
          render={(props) => { return <Welcome {...props} name={props.match.params.name} /> }}
        />
        <Route
          exact
          path='/'
          render={(props) => <Welcome {...props} name="Dervin" />}
        />
        <Route path='/clock' component={Clock} />
        <Route path='/contact' component={Contact} />
        <Route path='/jeopardy' component={Jeopardy} />
        <Route path="*" component={NoMatch} />
        

      </Switch>
    </div>
  );
}

export default App;
