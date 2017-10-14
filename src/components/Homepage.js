import React from 'react';

import logo from '../logo.svg';
import './Homepage.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <img src={logo} className="Homepage-logo" alt="logo" />
          <h1 className="Homepage-title">Welcome to Obot</h1>
        </header>
        <p className="Homepage-intro">
          Buy low, sell high!! always setting the base..
        </p>
      </div>
    );
  }
}

export default Homepage;
