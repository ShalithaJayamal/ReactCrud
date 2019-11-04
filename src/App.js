import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';

class App extends Component
{
  render()
  {
    return(
      <Router>
        <div className = "container">
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
              <Link to = {'/'}  className = "navbar-brand">React crud Example by Shalitha</Link>
                <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
                  <ul className = "navbar-nav mr-auto">
                    <li LastName = "nav-item">
                      <Link to ={'/'} className = "nav-link">Home</Link>

                    </li>
                    <li LastName = "nav-item">
                      <Link to ={'/create'} className = "nav-link">Create</Link>

                    </li>
                    <li LastName = "nav-item">
                      <Link to ={'/index'} className = "nav-link">Index</Link>

                    </li>

                  </ul>

                </div>
            </nav><br/>
            <h2>
              Welcome to react Crude by Shalitha
            </h2>
            <Switch>
              <Route exact path = '/create' component = {Create}/>
              <Route exact path = '/edit/:id' component = {Create}/>
              <Route exact path = '/index' component = {Create}/>
            </Switch>

        </div>

      </Router>


    );
  }
}
export default App;