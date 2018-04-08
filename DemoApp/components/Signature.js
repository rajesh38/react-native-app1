import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet, Dimensions} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
    render() {
        return (
            <Text style={styles.signatureText}>
                Created By:&nbsp;
                <Text style={styles.signature}
                      onPress={() => {Linking.openURL(DataStore.creator.link)}}>
                      {DataStore.creator.name}
                </Text>
            </Text>
        );
    };
}

const styles = StyleSheet.create({
  signatureText: {
    textAlign: 'right',
    fontSize: 20
  },
  signature: {
      color: 'green'
  },
})
