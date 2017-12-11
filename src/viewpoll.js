import React, { Component } from 'react';
import{
    Link
    } from 'react-router-dom'
class Viewpoll extends Component{
    render(){
        return(
            <div>
                <Link to='/viewpoll'><button style={this.props.style}>View Polls</button></Link>
        </div>
        )
    }
}
export default Viewpoll