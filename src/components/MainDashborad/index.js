import React, { Component } from 'react'
import CalendarDash from '../HeaderDashboard/CalendarDash'
import EquipeLink from '../HeaderDashboard/EquipeLink'

export class MainDashboard extends Component {
  render() {
    return (
      <div className="container-fluid main_content_dash">
        <div className="child_content_main row">
          
        <CalendarDash />

        <EquipeLink />
        </div>
      </div>
    )
  }
}

export default MainDashboard
