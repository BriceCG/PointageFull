import React, { Component } from 'react'
import ListPresence from './ListPresence';
import { fetchPresence } from '../../redux'
import { connect } from 'react-redux'



export class Presence extends Component {
  componentWillMount() {
    this.props.fetchPresence()
    
  }
  
  
  
  render() {
    
    
    return (
      <div>
        <h1>Presence</h1>
   
        <hr />
        <div>
          <ListPresence/>
        </div>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=>{
  return{
    fetchPresence: ()=>dispatch(fetchPresence())
  }
}

export default connect(null,mapDispatchToProps) (Presence)
