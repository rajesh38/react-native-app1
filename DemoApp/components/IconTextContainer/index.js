import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class IconTextContainer extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.string,
    iconSize: PropTypes.number
  }
  static defaultProps = {
    iconSize: 30
  }
  render () {
    let iconTypeAttr = this.props.iconType && {
      type: this.props.iconType
    }
    return (
      <View style={styles.iconTextContainer}>
        <TouchableOpacity onPress={this.props.onPress}>
        <Icon
          size={this.props.iconSize}
          name={this.props.iconName}
          {...iconTypeAttr}
        />
      <Text style={styles.iconText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  iconTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  },
  iconText: {
    textAlign: 'center'
  }
})
