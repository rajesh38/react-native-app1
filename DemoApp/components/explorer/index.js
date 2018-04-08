import React, {Component} from 'react';
import {
	View,
	Text,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Explorer extends Component {
	render () {
		return (
      <View style={style.container}>
        <Text style={style.appExplorerTitle}>App Explorer</Text>
        <Button title="Back to Welcome Screen"
                onPress={this.props.exitExplorer}></Button>
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
    textAlign: 'center',
    color: 'green',
    fontSize: 20
  }
})