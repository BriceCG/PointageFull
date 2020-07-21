import React, { Component } from 'react'
import Header from '../Header';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Page404 from '../404';
import CrudApi from '../CrudApi'
import Presence from '../Presence';
import Home from '../Home';
export class Dashboard extends Component {
  // componentDidMount(){
    
  //   if(!window.localStorage.getItem('token')){
  //     this.props.history.push('/login')
  //   }
  // }
  
  render() {
    return (
      <Router>
       
        <Header  redirect={this.props}/>
        <div className="container-fluid">
        <Switch>
          <Route exact path="/dashboard/d" component={ CrudApi } />
          <Route path="/dashboard/presence" component={ Presence } />
          
          <Route path="/dashboard" component={ Home } />
          <Route component={ Page404 } />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default Dashboard
