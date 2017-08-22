/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Moment from 'moment'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native'

export default class Stopwatch extends Component {
  constructor() {
    super()

    this.state = {
      startTime: null,
      timeElapsed: Moment().minutes(0).seconds(0).milliseconds(0),
      running: false,
      laps: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>{this._clock()}</View>
          <View style={styles.buttonsWrapper}>
            {this._startButton()}
            {this._lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          {this._laps()}
        </View>
      </View>
    )
  }

  _laps() {
    return (
      this.state.laps.map((lap, index) => {
        return (
          <View key={index} style={styles.lap}>
            <Text style={styles.lapText}>Lap #{index + 1}</Text>
            <Text style={styles.lapText}>{Moment(lap).format('mm:ss:SS')}</Text>
          </View>
        )
      })
    )
  }

  _clock() {
    const formatedTime = Moment(this.state.timeElapsed).format('mm:ss:SS')

    return (
      <View>
        <Text style={styles.timer}>{formatedTime}</Text>
      </View>
    )
  }

  _startButton() {
    const style = this.state.running ? styles.stopButton : styles.startButton

    return(
      <TouchableHighlight underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button, style]}>

        <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
      </TouchableHighlight>
    )
  }

  _lapButton() {
    return(
      <TouchableHighlight underlayColor="gray"
        onPress={this.handleLapPress.bind(this)}
        style={[styles.button]}>
        <Text>Lap</Text>
      </TouchableHighlight>
    )
  }

  handleStartPress() {
    if(this.state.running) {
      clearInterval(this.interval)
      this.setState({ running: false })
      return
    }

    this.setState({startTime: Moment()})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: Moment().diff(this.state.startTime),
        running: true
      })
    }, 30)
  }

  handleLapPress() {
    const lap = this.state.timeElapsed

    this.setState({
      startTime: Moment(),
      laps: [...this.state.laps, lap]
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  header: {
    flex: 1
  },

  footer: {
    flex: 1
  },

  timerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonsWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  timer: {
    fontSize: 60
  },

  button: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  startButton: {
    borderColor: '#00CC00'
  },

  stopButton: {
    borderColor: 'red'
  },

  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  lapText: {
    fontSize: 20
  }
})

AppRegistry.registerComponent('stopwatch', () => Stopwatch)
