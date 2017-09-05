import React, { Component } from 'react'
import {
  Text,
  FlatList,
  Image
} from 'react-native'

import { ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import City from './City'

class CityTab extends Component {
  static navigationOptions = {
    headerTitle: <Image
          resizeMode="contain"
          style={{ width: 120, height: 32, marginTop: -3 }}
          source={require('../../assets/citieslogo.png')} />
  }
  render() {
    const cities = require('../../../b.json')

    return (
      <FlatList
        data={this.props.cities}
        renderItem={({ item }) => (
          <ListItem
            avatar={{ uri: item.image }}
            onPress={() => {
              this.props.navigation.navigate('City', { city: item })
            } }
            title={item.city}
          />
        )}
        keyExtractor={({ id }) => id }
      />
    )
  }
}

const ConnectedCitiesTab = connect((state) => ({ cities: state.cities }))(CityTab)

const CitiesRoutes = {
  CitiesTab: { screen: ConnectedCitiesTab },
  City: { screen: City }
}

const StackConfig = {
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#9c27b0'
    }
  }
}

export default StackNavigator(CitiesRoutes, StackConfig)
