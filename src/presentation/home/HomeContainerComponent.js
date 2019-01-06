/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList  } from 'react-native';

import HomePostComponent from './HomePostComponent';

export default class HomeContainerComponent extends Component<> {
  render() {
    const photos = [
      {id: 1, usuario: 'Rafael'},
      {id: 2, usuario: 'Alberto'},
      {id: 3, usuario: 'Vitor'}
    ];

    return (

      <FlatList 
        style={styles.container}
        data={photos}
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