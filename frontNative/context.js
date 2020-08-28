import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-native';
import AUTH_SERVICE from './services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const MyContext = createContext();

export class MyProvider extends Component {
  state = {
    formSignUp: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      date: '',
    },
    formLogin: {
      email: '',
      password: '',
    },
    isLogged: false,
  };

  handleLoginSubmit = (values) => {
    return AUTH_SERVICE.login(values)
      .then(({data: {user, token}}) => {
        this.setState({
          user,
          isLogged: true,
        });
        AsyncStorage.setItem('token', token);
        return {user, msg: 'Bienvenido a tu cuenta!!'};
      })
      .catch((err) => {
        this.setState({
          user: null,
          isLogged: false,
          formLogin: {
            email: '',
            password: '',
          },
        });
        AsyncStorage.setItem('token', '');
        return {user: null, msg: 'Usuario o contraseña incorrectos!!'};
      })
      .finally(() => this.setState({formLogin: {email: '', password: ''}}));
  };

  handleSignupSubmit = async (values) => {
    return await AUTH_SERVICE.signup(values);
  };

  handleLogout = async () => {
    await AUTH_SERVICE.logOut();
    AsyncStorage.setItem('token', '');
    this.props.history.push('/');
    this.setState({isLogged: false, user: null});
  };

  render() {
    const {state, handleLoginSubmit, handleSignupSubmit, handleLogout} = this;
    return (
      <MyContext.Provider
        value={{
          state,
          handleLoginSubmit,
          handleSignupSubmit,
          handleLogout,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default withRouter(MyProvider);
