import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
    render() {
        return (
          <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
            <Text style={styles.signatureText}>
                Created By:&nbsp;
            </Text>
            <TouchableHighlight onPress={() => {Linking.openURL(DataStore.creator.link)}}>
            <Text style={styles.signature}>
                  {DataStore.creator.name}
            </Text>
            </TouchableHighlight>
          </View>
        );
    };
}

const styles = StyleSheet.create({
  signatureText: {
    textAlign: 'right',
    fontSize: 20
  },
  signature: {
    color: 'green',
    fontSize: 20
  },
})
