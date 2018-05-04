import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Content from './components/Content/Content';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={Content}/>  
          </Switch>  
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
