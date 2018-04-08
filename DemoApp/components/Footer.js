import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Linking, StyleSheet, Dimensions} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
  static propTypes = {
    contentComponent: PropTypes.func.isRequired
  }
    render() {
        return (
            <View style={styles.footer}>
              <this.props.contentComponent/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  footer: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#A5E1E7'
  },
})
