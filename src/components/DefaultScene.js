import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image
} from 'react-native';
import ToolBar from './ToolBar';

const logo = require('./../imgs/logo.png');
const menuCliente = require('./../imgs/menu_cliente.png');
const menuContato = require('./../imgs/menu_contato.png');
const menuEmpresa = require('./../imgs/menu_empresa.png');
const menuServico = require('./../imgs/menu_servico.png');

export default class DefaultScene extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <ToolBar />
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menuGroup}>
          <Image style={styles.imageMenu} source={menuCliente} />
          <Image style={styles.imageMenu} source={menuContato} />
        </View>
        <View style={styles.menuGroup}>
          <Image style={styles.imageMenu} source={menuEmpresa} />
          <Image style={styles.imageMenu} source={menuServico} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menuGroup: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageMenu: {
    margin: 15
  }
});

