import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import ToolBar from './ToolBar';

const contactDetail = require('./../imgs/detalhe_contato.png');

export default class ContactScene extends Component {
  render() {
    return (
      <View style={styles.sceneBox}>
        <StatusBar backgroundColor="#61BD8C" />
        <ToolBar goBack navigator={this.props.navigator} backgroundColor="#61BD8C" />
        <View style={styles.optionSelected}>
          <Image source={contactDetail} />
          <Text style={styles.optionSelectedTitle} source={contactDetail}>Contact us</Text>
        </View>
        <View style={styles.optionSelectedInformation}>
          <Text style={styles.optionText}>Phone: +55 (27) 9999-9999</Text>
          <Text style={styles.optionText}>E-mail: company@company.com</Text>
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
    color: '#61BD8C',
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

