/**
 * @format
 */
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import Router from './Router';
import MyProvider from './context';
import {NativeRouter} from 'react-router-native';
import {ThemeProvider} from 'react-native-elements';

const theme = {
  colors: {
    primary: '#525252',
    secondary: '#F12378',
  },
};

const WhitTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Router />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const WhitContext = () => {
  return (
    <NativeRouter>
      <MyProvider>
        <WhitTheme />
      </MyProvider>
    </NativeRouter>
  );
};

AppRegistry.registerComponent(appName, () => WhitContext);
