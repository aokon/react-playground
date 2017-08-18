/**
 * Weekdays - simple react native app
 * @flow
 */
import React from 'react'
import Moment from 'moment'
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'

import DayItem from './src/components/day-item'

const Weekdays = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>Current day: {Moment().format('dddd')}</Text>
        <Text>Days of week: </Text>
        {this.days()}
      </View>
    )
  },

  days() {
    const days = []
    let day
    let i

    for(i = 0; i < 7; i++) {
      day = Moment().add(i, 'days').format('dddd')
      days.push(<DayItem day={day} key={i} dayUntil={i} />)
    }

    return days
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weekdays', () => Weekdays)
