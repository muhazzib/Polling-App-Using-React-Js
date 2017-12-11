import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Createpoll from './createpoll'
import Viewpoll from './viewpoll'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-12" style={{ textAlign: 'center' }}>
            <div style={{ margin: '2%' ,border:'1px solid black',padding:'2%',backgroundColor:'green'}}>
              <Createpoll style={{width:"20%",height:'100px',fontSize:'20px'}}/>

            </div>
            <div style={{ margin: '2%' ,border:'1px solid black',padding:'2%',backgroundColor:'orange'}}>

              <Viewpoll style={{width:"20%",height:'100px',margin:'auto',fontSize:'20px'}}/>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
