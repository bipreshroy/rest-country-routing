import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';
function App() {
  return (
    <div  className="App">
      <Router>
        <Switch>
          <Route path ="/home">
            <Home/>
          </Route>
          <Route path = "/country/:countryName">
            <CountryDetails/>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path = "*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
