/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Dimensions, 
  StyleSheet, 
  FlatList  } from 'react-native';

import HomePostComponent from './HomePostComponent';


const width = Dimensions.get('screen').width;

export default class HomeContainerComponent extends Component<{}> {
  render() {
    const fotos = [
      {id: 1, usuario: 'rafael'},
      {id: 2, usuario: 'alberto'},
      {id: 3, usuario: 'vitor'}
    ];

    return (

      <FlatList 
        style={styles.container}
        data={fotos}
        keyExtractor={item => `list-item-${item.id}`}
        renderItem={ ({item}) =>
          <HomePostComponent 
            profileImage={require('../../assets/images/leao.jpg')}
            userName={item.usuario}
            photo={require('../../assets/images/leao.jpg')}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})