import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  TouchableHighlight
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
          <TouchableHighlight 
            onPress={() => { this.props.navigator.push({ id: 'client' }); }}
            underlayColor={'#B9C941'}
            activeOpacity={0.7}
          >
            <Image style={styles.imageMenu} source={menuCliente} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => { this.props.navigator.push({ id: 'contact' }); }}
            underlayColor={'#61BD8C'}
            activeOpacity={0.7}
          >
            <Image style={styles.imageMenu} source={menuContato} />
          </TouchableHighlight>
        </View>
        <View style={styles.menuGroup}>
          <TouchableHighlight 
            onPress={() => { this.props.navigator.push({ id: 'company' }); }}
            underlayColor={'#EC7148'}
            activeOpacity={0.7}
          >
            <Image style={styles.imageMenu} source={menuEmpresa} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => { this.props.navigator.push({ id: 'service' }); }}
            underlayColor={'#19D1C8'}
            activeOpacity={0.7}
          >
            <Image style={styles.imageMenu} source={menuServico} />
          </TouchableHighlight>
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

