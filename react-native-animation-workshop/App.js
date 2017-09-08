import React from 'react';
import { Animated, PanResponder, Dimensions, StyleSheet, Text, View } from 'react-native';
import data from './src/data';
import Card from './src/components/Card';
import Button from './src/components/Button';

const SWIPE_DISTANCE = Dimensions.get('window').width
const SWIPE_THRESHOLD = SWIPE_DISTANCE / 3

export default class App extends React.Component {
  state = {
    items: data
  };

  position = new Animated.Value(0)

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: this.position }]),
    onPanResponderRelease: (e, { dx, vx }) => {
      if(Math.abs(dx) > SWIPE_THRESHOLD) {
        const direction = dx > 0 ? 1 : -1
        const velocity = Math.max(2.5, Math.abs(vx)) * direction

        Animated.decay(this.position, {
          velocity,
          deceleration: 0.985
        }).start(this.moveToNext)
      } else {
        Animated.spring(this.position, {
          toValue: 0,
          friction: 4
        }).start()
      }
    }
  })

  nopePresss = () => {
    //Animated.timing(this.position, { toValue: -1 }).start(this.moveToNext)
    Animated.spring(this.position, {
      toValue: -SWIPE_DISTANCE,
      frinction: 11,
      tension: 60,
      useNativeDriver: true
    }).start(this.moveToNext)
  }

  yepPress = () => {
    //Animated.timing(this.position, { toValue: 1 }).start(this.moveToNext)
    Animated.timing(this.position, {
      toValue: SWIPE_DISTANCE,
      useNativeDriver: true
    }).start(this.moveToNext)
  }

  moveToNext = ({ finished }) => { //calls when animation is done
    if(!finished) {
      return
    }

    this.setState(prevState => {
      const [first, ...rest] = prevState.items

      return {
        items: [...rest, first]
      }
    }, this.resetPosition)
  }

  resetPosition = ( ) => {
    this.position.setValue(0)
  }

  render() {
    const [item, next] = this.state.items

    const translateX = this.position

    //const translateX = this.position.interpolate({
      //inputRange: [-1, 1],
      //outputRange: [-SWIPE_DISTANCE, SWIPE_DISTANCE]
    //})

    //const rotate = this.position.interpolate({
      //inputRange: [-1, 1],
      //outputRange: ['-30deg', '30deg']
    //})

    const rotate = Animated.divide(this.position, SWIPE_DISTANCE).interpolate({
      inputRange: [-1, 1],
      outputRange: ['-30deg', '30deg']
    })

    const animatedStyle = {
      transform: [
        { translateX: translateX },
        { rotate: rotate }
      ]
    }

    //const nextScale = this.position.interpolate({
      //inputRange: [-1, 0.2, 0.2, 1], //timeline animation process map
      //outputRange: [1, 0.75, 0.75, 1] //to object sizes
    //})

    const nextScale = Animated.divide(this.position, SWIPE_DISTANCE).interpolate({
      inputRange: [-1, 0.2, 0.2, 1], //timeline animation process map
      outputRange: [1, 0.75, 0.75, 1], //to object sizes,
      extrapolate: 'clamp'
    })

    const nextStyle = {
      transform: [ { scale: nextScale }]
    }

    return (
      <View style={styles.container}>
        <Animated.View key={next.text} style={[styles.card, nextStyle]}>
          <Card image={next.image} text={next.text} />
        </Animated.View>
        <Animated.View
          key={item.text}
          style={[styles.card, animatedStyle]}
          {...this.panResponder.panHandlers}
        >
          <Card image={item.image} text={item.text} />
        </Animated.View>
        <View style={styles.buttonBar}>
          <Button text="Nope" onPress={this.nopePresss} backgroundColor="#ff3b30" />
          <Button text="Yep" onPress={this.yepPress} backgroundColor="#4cd964" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 245, 253)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBar: {
    alignItems: 'stretch',
    flexDirection: 'row',
    position: 'absolute',
    padding: 5,
    bottom: 0,
    left: 0,
    right: 0,
    height: 75
  },
  card: {
    position: 'absolute'
  }
});
