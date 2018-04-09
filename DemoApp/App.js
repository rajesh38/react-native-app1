/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Timer from './components/Timer';
import Signature from './components/Signature';
import Header from './components/Header';
import Footer from './components/Footer';
import AppHeaderContent from './components/AppHeaderContent';
import Explorer from './components/explorer';
import { Button } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
      welcomeScreen: true
    }
  }
  exploreApp = () => {
    this.setState({welcomeScreen: false});
  }
  backToWelcomeScreen = () => {
    this.setState({welcomeScreen: true});
  }
  render() {
    let containerCentered = !!this.state.welcomeScreen;
    return (
      <View style={styles.outerContainer}>
        <Header contentComponent={AppHeaderContent}/>
        <View style={containerCentered ? styles.centered : {}}>
          {this.state.welcomeScreen &&
            <View>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
            <Timer style={styles.timer}/>
            <Button title="Explore App"
                    onPress={this.exploreApp}
            />
            </View>
          }
          {!this.state.welcomeScreen &&
            <Explorer exitExplorer={this.backToWelcomeScreen}/>
          }
        </View>
        <Footer contentComponent={Signature}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'lightgrey',
      },
    }),
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
  timer: {
    color: 'blue',
    fontSize: 21,
    textAlign: 'center'
  },
});
