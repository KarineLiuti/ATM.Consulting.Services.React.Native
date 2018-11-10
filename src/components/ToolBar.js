import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const imgGoBack = require('./../imgs/voltar.png');

export default class ToolBar extends Component {
  render() {
    if (this.props.goBack) {
      return (
        <View style={[styles.toolBar, { backgroundColor: this.props.backgroundColor }]}>
          <TouchableHighlight onPress={() => { this.props.navigator.pop(); }}>
            <Image 
              style={{ width: 20, height: 20, marginTop: 10, marginLeft: 5 }} 
              source={imgGoBack} 
            />
          </TouchableHighlight>
          <Text style={styles.title}>
            ATM Consulting Services
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.toolBar}>
        <Text style={styles.title}>
          ATM Consulting Services
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginTop: 7,
    textAlign: 'center',
    color: '#000'
  }
});

