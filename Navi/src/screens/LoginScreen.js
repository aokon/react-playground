import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  Button,
  Platform,
  View
} from 'react-native'

import { NavigationActions } from 'react-navigation'

class DetailScreen extends Component {
  static navigationOptions = {
    header: null
  }

  handleLogin = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Drawer' })
      ]
    })

    navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
          title="Login"
          onPress={this.handleLogin}
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
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
