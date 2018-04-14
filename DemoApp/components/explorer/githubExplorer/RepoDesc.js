import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class RepoDesc extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {repo} = this.props;
    return(
      <View>
        <Text style={styles.repoName}>{repo.name}</Text>
        <Text style={styles.repoDesc}>{repo.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  repoName: {
    fontSize: 25
  },
  repoDesc: {
    fontSize: 15
  }
})
