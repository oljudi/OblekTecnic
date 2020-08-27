import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-native';

export const MyContext = createContext();

export class MyProvider extends Component {
  state = {};

  render() {
    return (
      <MyContext.Provider value={{}}>{this.props.children}</MyContext.Provider>
    );
  }
}

export default withRouter(MyProvider);
