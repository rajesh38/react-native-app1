import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import * as Actions from './actions';
import DataStore from '../../../DataStore';
import * as _ from 'lodash';
import RepoDesc from './RepoDesc';

export default class GithubExplorer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(!this.props.githubExplorer.loaded) {
      this.props.dispatch(Actions.loadRepos(DataStore.explorer.githubExplorer.repoOwner));
    }
  }

  render(){
    let {githubExplorer} = this.props;
    let repoRows = [];
    if (_.get(githubExplorer, 'loaded')) {
      let {repos} = githubExplorer.data;
      for (var i = 0; i < repos.length; i++) {
        repoRows.push(
          <RepoDesc key={repos[i].name} repo={repos[i]}/>
        );
      }
    }
    return(
      <View style={{width: '100%', backgroundColor: 'aqua', height: '100%'}}>
      <View>
      {_.get(githubExplorer, 'loading') &&
        <View>
        <Text>Loading repos for {`${_.get(githubExplorer, 'data.repoOwner')}`}</Text>
        </View>
      }
      {_.get(githubExplorer, 'loaded') &&
        <ScrollView>
          <Text style={{fontSize: 20}}>Repos for {`${_.get(githubExplorer, 'data.repoOwner')}`}</Text>
          {repoRows}
        </ScrollView>
      }
      </View>
      </View>
    );
  }
};
