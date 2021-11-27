import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Navigation from './src/components/Navigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;
