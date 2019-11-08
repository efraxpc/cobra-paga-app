import React, { Component } from 'react';
import { Text } from 'native-base';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainMenu from './Components/MainMenu'
import PendingClients from './Components/PendingClients'
import MapPendingclients from './Components/MapPendingClients'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: MainMenu,
    PendingClients: PendingClients,
    MapPendingclients: MapPendingclients
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3F51B5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default createAppContainer(AppNavigator);
