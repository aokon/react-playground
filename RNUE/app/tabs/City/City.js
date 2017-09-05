import React from 'react'

import {
  View,
  Text
} from 'react-native'

class City extends React.Component {
  static navigationOptions = (props) => {
    const { navigation: { state: { params } }  } = props

    return {
      title: params.city.city
    }
  }
  render() {
    return (
      <View>
        <Text>Hello City!!</Text>
      </View>
    )
  }
}

export default City
