import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/LoginComponent";
import ViewStudent from './Components/ViewStudentComponent';
function App() {
  return (


    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Students"}>Students</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/Students" component={ViewStudent} />
                       



          </Switch>

        </div>
      </div>

    </Router>


  );
}

export default App;