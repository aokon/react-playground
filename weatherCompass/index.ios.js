/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import MapView from 'react-native-maps'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class weatherCompass extends Component {
  constructor() {
    super()

    this.state = {
      pin: {
        latitude: 54.360763,
        longitude: 18.409851
      }
    }
  }

  regionChangeHandler(region) {
    this.setState({ pin: region })
  }

  render() {

    return (
      <View style={styles.container}>
        <MapView style={styles.map} onRegionChange={this.regionChangeHandler.bind(this)}>
          <MapView.Marker coordinate={this.state.pin}
            title="Lorem Ipsum"
            description="Lorem ipsum lorem dummy" />
       </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  map: {
     ...StyleSheet.absoluteFillObject
  }
})

AppRegistry.registerComponent('weatherCompass', () => weatherCompass)
