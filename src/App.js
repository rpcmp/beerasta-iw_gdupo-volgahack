import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Login from './components/login/login';
import Beer from './components/beer/index';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/beer" component={Beer}/>
        <Route path="/login" component={Login}/>
      </div>
    </HashRouter>
  );
}

export default App;
