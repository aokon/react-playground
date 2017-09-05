import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  Button,
  View
} from 'react-native'

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details'
  }

  handleBack = () => {
    const { navigation } = this.props

    navigation.goBack()
  }

  render() {
    const { navigation: { state: { params: { id, message }}}} = this.props

    return (
      <View style={styles.container}>
        <Text> Details Screen</Text>
        <Text>{message}</Text>
        <Button
          color="red"
          title="Back"
          onPress={this.handleBack}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DetailScreen
