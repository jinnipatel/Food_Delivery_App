import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../utils/Color';
import styles from './style';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.maincontainer}
        onPress={this.props.onPress}>
        <LinearGradient
          colors={[Color.GRADIENT1, Color.GRADIENT2]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <Text style={styles.text}>{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
