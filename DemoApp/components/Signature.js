import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet, Dimensions} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
    render() {
        return (
            <View style={styles.signatureSection}>
            <Text style={styles.signatureText}>
                Created By:&nbsp;
                <Text style={styles.signature}
                      onPress={() => {Linking.openURL(DataStore.creator.link)}}>
                      {DataStore.creator.name}
                </Text>
            </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  signatureSection: {
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#A5E1E7'
  },
  signatureText: {
    textAlign: 'right',
    fontSize: 20
  },
  signature: {
      color: 'green'
  },
})
