import React from 'react';
import Header from './components/header';
import NavBar from './components/nav_bar';
import Home from './components/home';
import RealEstate from './components/real_estate';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main right-body">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/real-estate" component={RealEstate} />
        </div>
      </div>
    );
  }
}

export default App;
