import React, { Component } from 'react';
import{
Link
} from 'react-router-dom'
class Createpoll extends Component{
    render(){
        return(
            <div>
   <Link to='/createpoll'><button style={this.props.style}>Create Poll</button></Link>
                </div>
        
        )
    }
}
export default Createpoll