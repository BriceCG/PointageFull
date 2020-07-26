import React, { Component } from 'react'
import Scheduler from './Scheduler'
import EquipeLink from './EquipeLink'

export class MainDashboard extends Component {
  render() {
    return (
      <div className="container-fluid main_content_dash">
        <div className="child_content_main row">
          
        <Scheduler />

        <EquipeLink />
        </div>
      </div>
    )
  }
}

export default MainDashboard
