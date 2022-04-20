import React, { Component } from 'react';
import { render } from 'react-dom';
import App from "./App"

//use the fire.js and add in your firebase account information
import firebase from './fire.js';
import './style.css';

render(<App />, document.getElementById('root'));
