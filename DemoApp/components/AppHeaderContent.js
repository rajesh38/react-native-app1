import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet, Dimensions} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
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
