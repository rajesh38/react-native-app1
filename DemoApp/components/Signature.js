import React, {Component} from 'react';
import {Text, Linking, StyleSheet} from 'react-native';
import DataStore from '../DataStore';

export default class Signature extends Component {
    render() {
        let {style} = this.props;
        return (
            <Text style={style}>
                Created By:&nbsp;
                <Text style={{color: 'blue'}}
                      onPress={() => {Linking.openURL(DataStore.creator.link)}}>
                      {DataStore.creator.name}
                </Text>
            </Text>
        );
    };
}
