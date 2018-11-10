import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import DefaultScene from './src/components/DefaultScene';

export default class ATMConsultingServices extends Component {
  render() {
    return (
      <View>
        <DefaultScene />
      </View>
    );
  }
}
AppRegistry.registerComponent('ATMConsultingServices', () => ATMConsultingServices);
