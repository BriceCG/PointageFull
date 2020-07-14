import React, { Component } from 'react'
import Header from '../Header';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Form from './Form';
import Page404 from '../404';
import CrudApi from '../CrudApi'
import Presence from '../Presence';
export class Dashboard extends Component {
  // componentDidMount(){
    
  //   if(!window.localStorage.getItem('token')){
  //     this.props.history.push('/login')
  //   }
  // }
  
  render() {
    return (
      <Router>
        <div className="dashboard_main">
        <Header  redirect={this.props}/>
        <Switch>
          <Route path="/dashboard/presence" component={ Presence } />
          <Route path="/dashboard" component={ CrudApi } />
          <Route component={ Page404 } />
        </Switch>
      
        </div>
      </Router>
    )
  }
}

export default Dashboard
