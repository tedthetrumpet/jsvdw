import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (

    <header>
      <div className="head-text">
        <div className="head-image">
          <img src={require('../ images / Header.png')} alt="Freedom Blog" />
        </div>
        <div class='text-on-image'>
          <h3> Welcome to my Blog </h3>
          <p> FREEEEDOM </p>
        </div>
      </div>
    </header>



  );
}