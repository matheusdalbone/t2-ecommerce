import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/stack';
import DrawerRoutes from './src/routes/drawer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#6246EA"/>
      <Routes/>
    </NavigationContainer>
  );
}
