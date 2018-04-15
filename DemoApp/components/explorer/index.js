import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	View,
	Text,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import GithubExplorer from './githubExplorer';
import IconTextContainer from '../IconTextContainer';

class Explorer extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			currentApp: null
		}
	}
	render () {
		return (
			<View style={{height: '100%'}}>
				<Text style={style.appExplorerTitle}>App Explorer</Text>
				<Button title="Back to Welcome Screen"
				onPress={this.props.exitExplorer}></Button>
				<View style={{padding: 15}}>
					{!this.state.currentApp &&
						<IconTextContainer
							iconName='github'
							iconType='font-awesome'
							text='Explore Github'
							></IconTextContainer>
					}
					<GithubExplorer githubExplorer={this.props.githubExplorer} dispatch={this.props.dispatch}
					/>
				</View>
			</View>
		)
	}
}

let style = StyleSheet.create({
  appExplorerTitle: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20
  }
})

function mapStateToProps(state) {
	let {
		githubExplorer
	} = state.explorerRootReducer;
	return {
		githubExplorer
	};
}

export default connect(mapStateToProps)(Explorer);
