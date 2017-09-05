/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  Button,
  View
} from 'react-native';

import {
  StackNavigator,
  NavigationActions,
  DrawerNavigator
} from 'react-navigation'

import DetailScreen from './src/screens/DetailScreen'
import LoginScreen from './src/screens/LoginScreen'

class App extends Component {
  static navigationOptions = ({ navigationOptions, navigation }) => ({
    headerStyle: {
      ...navigationOptions.headerStyle,
      backgroundColor: 'red',
      paddingRight: Platform.OS === 'android' ? 8 : 0
    },

    title: 'Home',

    headerRight:  (
       <Button
        color={Platform.OS === 'android' ? "#3F51B5" : "#FFFFFF"}
        onPress={() => {
          navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
              NavigationActions.navigate({ routeName: 'Login' })
            ]
          }))
        }}
        title="Log out"
      />
    )
  })

  handlePush = () => {
    const { navigation } = this.props

    navigation.navigate('Details', { id: 100, message: 'hello from home screen' })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#f74c4f"
          barStyle="light-content"
        />

        <Button
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
          title="Push screen"
          onPress={this.handlePush}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const HomerDrawer = DrawerNavigator({
  Home: {
    screen: App
  },
  Details: {
    screen: DetailScreen
  }
})

const AppScreen = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Drawer: {
    screen: HomerDrawer
  }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f74c4f'
    },
    headerTintColor: '#fff'
  }
})

export default AppScreen
