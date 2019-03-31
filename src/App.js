import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landpage from './layout/Landpage';
import './App.css';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Landpage}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
