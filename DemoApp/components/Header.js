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
            <View style={styles.header}>
              <this.props.contentComponent/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    position: 'absolute',
    top: 0,
    backgroundColor: '#A5E1E7'
  },
})
