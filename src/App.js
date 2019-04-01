import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import FormDataRegister  from  './screen/FormData';
import GridData from  './screen/GridData';
import Landpage from './screen/Landpage';
import './App.css';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route  path='/' component={Landpage} />
              <Route  path='/add' component={FormDataRegister} />

          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
