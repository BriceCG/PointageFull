import React, { Component,PureComponent } from 'react'
import ListUser from './ListUser';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';




export class CrudApi extends PureComponent {
  state = {
    modal: false
  }

// Begin modal
  openModal = ()=>{
    this.setState({modal: true})
  }

  closeModal = ()=>{
    this.setState({modal: false})
  }


  // end Modal
  render() {
  
    return (
      <div style={{display: 'flex'}}>
       
        <hr />
        <CreateUser />
        <ListUser openModal={this.openModal} />
        {this.state.modal && <UpdateUser  closeModal={this.closeModal} />}
      </div>
    )
  }
}


export default CrudApi
