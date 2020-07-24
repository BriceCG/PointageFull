import React from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Page404 from './components/404';
import CrudApi from './components/CrudApi';
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
       
        <Route exact path="/" component={ Login } />
        <Route path="/create" component={ CrudApi } />
        <PrivateRoute path="/dashboard" component={ Dashboard } />
        <Route component={ Page404 } />
      </Switch>
    </Router>
  )
}

export default App
