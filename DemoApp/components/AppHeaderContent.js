import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import DataStore from '../DataStore';

export default class AppHeaderContent extends Component {
    render() {
        return (
          <Text style={styles.headerText}>
              Welcome to React Native!
          </Text>
        );
    };
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
})
