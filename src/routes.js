import React, { Component } from 'react';
import{
    BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'
import Nav from './Nav'

import App from './App';
import Createpollcomponent from './createpollcomponent'
import Viewpollcomponent from './viewpollcomponent'
const Root = () => (
    <Router>
      <div> 
        <Nav />
        <Route exact path="/" component={App}/>
          
        <Route path="/createpoll" component={Createpollcomponent}/>
        <Route path="/viewpoll" component={Viewpollcomponent}/>
      </div>
    </Router>
  )
  export default Root