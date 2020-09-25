import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import LogIn from './components/LogIn';
//import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" component={LogIn} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
