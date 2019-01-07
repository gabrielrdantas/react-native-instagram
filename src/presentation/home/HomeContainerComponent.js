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
    const dataAPI = [
      {
        id: 1,
        userName: 'Rafael',
        userProfileImage: require('../../assets/images/leao.jpg'),
        photo: require('../../assets/images/leao.jpg'),
        likesUsers:[2, 3],
        legend: 'Leão boladão',
        comments:[
          {
            userId: 1,
            userName: 'Alberto',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            userId: 3,
            userName: 'Vitor',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      },
      {
        id: 2,
        userName: 'Alberto',
        userProfileImage: require('../../assets/images/leao.jpg'),
        photo: require('../../assets/images/leao.jpg'),
        likesUsers: [1, 3],
        legend: 'Leão boladão',
        comments:[]
      },
      {
        id: 3,
        userName: 'Vitor',
        userProfileImage: require('../../assets/images/leao.jpg'),
        photo: require('../../assets/images/leao.jpg'),
        likesUsers: [1, 2],
        legend: 'Leão boladão',
        comments:[]
      }
    ];

    return (

      <FlatList 
        style={styles.container}
        data={dataAPI}
        keyExtractor={item => `list-item-${item.id}`}
        renderItem={ ({item}) =>
          <HomePostComponent 
            profileImage={item.userProfileImage}
            userId={item.userId}
            userName={item.userName}
            photo={item.photo}
            isLiked={item.isLiked}
            likesUsers={item.likesUsers}
            legend={item.legend}
            comments={item.comments}
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