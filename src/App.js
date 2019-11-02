import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Header from './components/header/index';
import Login from './components/account/login/index';
import Register from './components/account/register/index';
import User from './components/account/user/index';
import Beer from './components/beer/beer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Route exact path="/beer" component={Beer}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/user" component={User}></Route>
      </div>
      
    </HashRouter>
  );
}

export default App;
