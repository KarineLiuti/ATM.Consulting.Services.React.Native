import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import ToolBar from './ToolBar';

const companyDetail = require('./../imgs/detalhe_empresa.png');

export default class CompanyScene extends Component {
  render() {
    return (
      <View style={styles.sceneBox}>
        <StatusBar backgroundColor="#EC7148" />
        <ToolBar goBack navigator={this.props.navigator} />
        <View style={styles.optionSelected}>
          <Image source={companyDetail} />
          <Text style={styles.optionSelectedTitle} source={companyDetail}>Company</Text>
        </View>
        <View style={styles.optionSelectedInformation}>
          <Text 
            style={styles.optionText}>We are the best consultant company of the world! Join us!
          </Text>
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
    color: '#EC7148',
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

