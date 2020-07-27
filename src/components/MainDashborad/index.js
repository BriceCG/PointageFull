import React, { Component } from 'react'
import Scheduler from './Scheduler'
import EquipeLink from './EquipeLink'

export class MainDashboard extends Component {
  logDataUpdate = (action, ev, id) => {
    const text = ev && ev.text ? ` (${ev.text})` : '';
    const message = `event ${action}: ${id} ${text}`;
  }
  render() {
    
    return (
      <div className="container-fluid main_content_dash">
        <div className="child_content_main row">

          <Scheduler
            onDataUpdated={this.logDataUpdate}
          />

          <EquipeLink />
        </div>
      </div>
    )
  }
}

export default MainDashboard
