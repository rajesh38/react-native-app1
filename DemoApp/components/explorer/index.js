import React, {Component} from 'react';
import {
	View,
	Text,
  StyleSheet
} from 'react-native';

export default class Explorer extends Component {
	render () {
		return (
      <View style={style.container}>
        <Text style={style.appExplorerTitle}>App Explorer</Text>
      </View>
		)
	}
}

let style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
  },
  appExplorerTitle: {
    color: 'green',
    fontSize: 20
  }
})