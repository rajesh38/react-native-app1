import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import DataStore from '../DataStore';

export default class Header extends Component {
  static propTypes = {
    contentComponent: PropTypes.func.isRequired
  }
    render() {
        return (
            <View style={styles.headerContainer}>
              <this.props.contentComponent/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#A5E1E7'
  }
})

