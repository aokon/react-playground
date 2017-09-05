import React from 'react'
import { TabNavigator } from 'react-navigation'
import {
  Image,
  StyleSheet
} from 'react-native'

import AddCityTab from './tabs/AddCity/AddCityTab'
import CityTab from './tabs/City/CityTab'

const RouteConfig = {
  CityTab: { // order of ele
    screen: CityTab,
    navigationOptions: {
      tabBarIcon: (props) => (
        <Image
          style={[styles.logo, { tintColor: props.tintColor }]}
          source={require('./assets/cityicon.png')} />
      ),
      tabBarLabel: 'Cities'
    }
  },
  AddCityTab: {
    screen: AddCityTab,
    navigationOptions: {
      tabBarIcon: (props) => (
        <Image
          style={[styles.logo, { tintColor: props.tintColor }]}
          source={require('./assets/addicon.png')} />
      ),
      tabBarLabel: 'Add City'
    }
  }
}

const TabConfig = {
  initialRouteName: 'CityTab',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#9c27b0',
    idicatorStyle: { // only for androind
      backgroundColor: '#666'
    },
    style: { // only for android to have same look and feel like for ios tab bar
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    }
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 28,
    height: 28
  }
})

export default Routes = TabNavigator(RouteConfig, TabConfig)
