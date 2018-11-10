import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import ToolBar from './ToolBar';

const client1 = require('./../imgs/cliente1.png');
const client2 = require('./../imgs/cliente2.png');
const clientDetail = require('./../imgs/detalhe_cliente.png');

export default class ClientScene extends Component {
  render() {
    return (
      <View style={styles.sceneBox}>
        <StatusBar backgroundColor="#B9C941" />
        <ToolBar goBack navigator={this.props.navigator} backgroundColor="#B9C941" />
        <View style={styles.optionSelected}>
          <Image source={clientDetail} />
          <Text style={styles.optionSelectedTitle} source={clientDetail}>Our clients</Text>
        </View>
        <View style={styles.optionSelectedInformation}>
          <Image source={client1} />
          <Text style={styles.optionText}>Opa gagsyaasg sjus</Text>
        </View>
        <View style={styles.optionSelectedInformation}>
          <Image source={client2} />
          <Text style={styles.optionText}>Opa gagsyaasg sjus</Text>
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
    color: '#B9C941',
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

