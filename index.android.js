import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import ClientScene from './src/components/ClientScene';
import DefaultScene from './src/components/DefaultScene';

export default class ATMConsultingServices extends Component {
  render() {
    return (
      <View style={styles.index}>
      
      <Navigator 
        initialRoute={{ id: 'default' }}
        renderScene={(route, navigator) => {
          if (route.id === 'default') {
            return (<DefaultScene navigator={navigator} />);
          }
          if (route.id === 'client') {
            console.log(navigator);
            return (<ClientScene />);
          }
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  index: { 
    backgroundColor: '#FFF', 
    flex: 1 
  }
});

AppRegistry.registerComponent('ATMConsultingServices', () => ATMConsultingServices);
