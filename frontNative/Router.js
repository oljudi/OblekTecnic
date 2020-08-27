import React from 'react';
import {Switch, Route} from 'react-router-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import {Header} from 'react-native-elements';

const Router = () => {
  return (
    <>
      <Header
        centerComponent={{
          text: 'OblekTecnic',
          style: {color: '#fff'},
        }}
      />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
};

export default Router;
