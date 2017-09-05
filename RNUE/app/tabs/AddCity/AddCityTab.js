import React, { Component } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { addCity } from '../../actions/cities'

class AddCityTab extends Component {
  state = {
    name: '',
    country: ''
  }

  submit = () => {
    const action = addCity(this.state.name, this.state.country)
    this.props.dispatch(action)
    this.setState({ name: '', country: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../../assets/citieslogo.png')}
          style={styles.logo} />
        <TextInput
          placeholder="Type city"
          onChangeText={(name) => { this.setState({ name })}}
          style={styles.input}
          value={this.state.name} />
        <TextInput
          placeholder="Type country"
          onChangeText={(country) => { this.setState({ country })}}
          returnKeyType="go"
          onSubmitEditing={this.submit}
          style={styles.input}
          value={this.state.country} />
        <TouchableOpacity
          onPress={this.submit}
          style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c27b0',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  button: {
    height: 50,
  },
  logo: {
    height: 36,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#8e8e8e',
    lineHeight: 50,
    color: '#fff'
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
    marginBottom: 10,
    paddingLeft: 5
  }
})

export default connect()(AddCityTab)
