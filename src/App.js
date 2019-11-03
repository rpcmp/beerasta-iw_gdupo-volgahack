import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Header from './components/header/header';
import Login from './components/account/login/login';
import Register from './components/account/register/register';
import User from './components/account/user/user';
import Beer from './components/beer/beer';
import Friend from './components/friend/friend';
import Doctrine from './components/doctrine/doctrine';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Route exact path="/beer" component={Beer}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/user" component={User}></Route>
        <Route path="/friend" component={Friend}></Route>
        <Route path="/evangelie" component={Doctrine}></Route>
      </div>
      
    </HashRouter>
  );
}

export default App;
