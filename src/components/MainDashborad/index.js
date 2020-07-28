import React, { Component } from 'react'
import Scheduler from './Scheduler'
import EquipeLink from './EquipeLink'
import HeaderDashboard from '../HeaderDashboard'

export class MainDashboard extends Component {
   data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 6:00', text:'Event 1', id: 1 },
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];


  render() {
    return (
      <div className="main_dash" >
      <HeaderDashboard />
      <div className="container-fluid main_content_dash">
        <div className="child_content_main row">
          
        <Scheduler events={this.data} />

        <EquipeLink />
        </div>
      </div>
      </div>
    )
  }
}

export default MainDashboard
