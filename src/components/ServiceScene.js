import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import ToolBar from './ToolBar';

const serviceDetail = require('./../imgs/detalhe_servico.png');

export default class ServiceScene extends Component {
  render() {
    return (
      <View style={styles.sceneBox}>
        <StatusBar backgroundColor="#19D1C8" />
        <ToolBar goBack navigator={this.props.navigator} />
        <View style={styles.optionSelected}>
          <Image source={serviceDetail} />
          <Text style={styles.optionSelectedTitle} source={serviceDetail}>Our services</Text>
        </View>
        <View style={styles.optionSelectedInformation}>
          <Text style={styles.optionText}>Consultant for you</Text>
          <Text style={styles.optionText}>Gamifications</Text>
          <Text style={styles.optionText}>Meetings</Text>
          <Text style={styles.optionText}>Visits</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionSelected: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-start'
  },
  optionSelectedInformation: {
    padding: 20,
    marginTop: 10
  },
  optionSelectedTitle: {
    color: '#19D1C8',
    fontSize: 25,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 25
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10
  },
  sceneBox: {
    flex: 1, 
    backgroundColor: '#FFF' 
  }
});

