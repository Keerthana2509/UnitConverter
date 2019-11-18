import React from 'react';
import HomePage from './Container/HomePage';
import Length from './Container/Length';
import Temperature from './Container/Temperature';
import Weight from './Container/Weight';
import Time from './Container/Time';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}/> 
          <Route exact path={"/length"} component={Length}/>
          <Route path={"/temp"} component={Temperature}/>
          <Route path={"/weight"} component={Weight}/>
          <Route path={"/time"} component={Time}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
