import React, { Component } from 'react';
import{
    Link
    } from 'react-router-dom'

    const Nav=()=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div id="navbarNavAltMarkup">
    <div className="navbar-nav">
  <Link className="navbar-brand" to='/'>Polling App</Link>
      <Link className="nav-item nav-link" to='/createpoll'>Create Poll</Link>
      <Link className="nav-item nav-link" to='/viewpoll'>View Poll</Link>
    </div>
  </div>
</nav>
        )
    }

    export default Nav