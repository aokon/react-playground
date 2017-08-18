import React from 'react'
import { Text } from 'react-native'

export default React.createClass({
  render() {
    return (
      <Text style={this.styles()}>
        {this.props.day}
      </Text>
    )
  },

  styles() {
    return {
      fontSize: this.fontSize(),
      fontWeight: this.fontWeight(),
      color: this.color(),
      lineHeight: this.lineHeight()
    }
  },

  color() {
    const opacity = this.props.dayUntil > 0 ? (1 / this.props.dayUntil) : 1

    return `rgba(0, 0, 0, ${opacity})`
  },

  fontSize() {
    return 60 - 6 * this.props.dayUntil
  },

  fontWeight() {
    return String((7 - this.props.dayUntil) * 100)
  },

  lineHeight() {
    return 70 - 4 * this.props.dayUntil
  }
})
