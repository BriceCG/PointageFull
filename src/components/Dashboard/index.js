import React, { Component } from 'react'
import Header from '../Header';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Page404 from '../404';
import CrudApi from '../CrudApi'
import Presence from '../Presence';
import Home from '../Home';
import ViewPresence from '../ViewPresence';
import MainDashboard from '../MainDashborad';
import HeaderDashboard from '../HeaderDashboard';

export class Dashboard extends Component {
  // componentDidMount(){
    
  //   if(!window.localStorage.getItem('token')){
  //     this.props.history.push('/login')
  //   }
  // }
  
  
  render() {
    return (
      <Router>
        
        {/* <Header  redirect={this.props}/> */}
        <div className="main_dash" >
        <HeaderDashboard />
        <Switch>
          <Route exact path="/dashboard/d" component={ CrudApi } />
          <Route path="/dashboard/presence" component={ Presence } />

      


          <Route path="/dashboard/view-presence-and-cumuls" component={ ViewPresence }/>
          
         
            <Route path="/dashboard" exact component={ MainDashboard } />
        

          <Route component={ Page404 } />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default Dashboard
