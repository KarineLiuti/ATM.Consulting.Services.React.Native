import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import ToolBar from './ToolBar';

export default class DefaultScene extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <View>
          <ToolBar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

