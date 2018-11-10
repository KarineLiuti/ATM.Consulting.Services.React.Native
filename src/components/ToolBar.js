import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ToolBar extends Component {
  render() {
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
    height: 60
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});

