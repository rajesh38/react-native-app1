import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Linking, StyleSheet, Dimensions} from 'react-native';
import DataStore from '../DataStore';

export default class Footer extends Component {
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
    width: '100%',
    height: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#A5E1E7',
    justifyContent: 'center',
  },
})
