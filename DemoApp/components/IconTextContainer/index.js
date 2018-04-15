import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class IconTextContainer extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.string
  }
  render () {
    let iconTypeAttr = this.props.iconType && {
      type: this.props.iconType
    }
    return (
      <View style={styles.iconTextContainer}>
        <Icon
          style={styles.icon}
          name={this.props.iconName}
          {...iconTypeAttr}
        />
      <Text>{this.props.text}</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  iconTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  }
  icon: {
    fontSize: 30
  }
})
