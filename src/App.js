import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Page404 from './components/404';
import CrudApi from './components/CrudApi';
import Create from './components/Create';
import Dashboard from './components/Dashboard'
import Val from './components/ValidationForm/validation';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
       
        <Route exact path="/" component={ Login } />
        <Route path="/create" component={ CrudApi } />
        <PrivateRoute path="/dashboard" component={ Dashboard } />
        <Route path="/valid" component={ Val } />
        <Route component={ Page404 } />
      </Switch>
    </Router>
  )
}

export default App
