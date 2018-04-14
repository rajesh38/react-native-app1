import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class GithubExplorer extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let keyRows = [];
    props = Object.keys(this.props.githubExplorer);
    for (var i = 0; i < props.length; i++) {
      keyRows.push(<Text key={`props[${i}]`}>{props[i]}</Text>);
    }
    return(
      <View>
      {keyRows}
      </View>
    );
  }
};
