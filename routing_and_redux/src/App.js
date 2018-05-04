import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Content from './components/Content';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route path='/' component={Content}/>  
          </Switch>  
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
