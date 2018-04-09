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
			<View>
			<Text style={style.appExplorerTitle}>App Explorer</Text>
			<Button title="Back to Welcome Screen"
			onPress={this.props.exitExplorer}></Button>
			</View>
		)
	}
}

let style = StyleSheet.create({
  appExplorerTitle: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20
  }
})
