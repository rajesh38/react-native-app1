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
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import Signature from './components/Signature';
import Header from './components/Header';
import Footer from './components/Footer';
import AppHeaderContent from './components/AppHeaderContent';
import Explorer from './components/explorer';
import { Button } from 'react-native-elements';
import configureStore from './store/configureStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  constructor (props, context) {
    super(props, context);
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
      <Provider store={store}>
      <View style={styles.outerContainer}>
        <Header contentComponent={AppHeaderContent}/>
        <View style={containerCentered ? [styles.bodyContainer, styles.centered] : [styles.bodyContainer]}>
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
            <Explorer exitExplorer={this.backToWelcomeScreen}
                      store={store.explorerRootReducer}
            />
          }
        </View>
        <Footer contentComponent={Signature}/>
      </View>
      </Provider>
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
  bodyContainer: {
    width: '100%',
    paddingBottom: 130
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
