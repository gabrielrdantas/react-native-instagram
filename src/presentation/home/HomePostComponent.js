import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class HomePostComponent extends Component {
  render() {
    return (
     <View>
         <View style={styles.header}>
         <Image 
             source={this.props.profileImage} 
             style={styles.profileImage} />
         <Text>{this.props.userName}</Text>
         </View>
         <Image source={this.props.photo} style={styles.photo} />
     </View>
     );
  }
}

const styles = StyleSheet.create({
  header: {
    margin:10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  profileImage: {
    margin: 10, 
    borderRadius: 20, 
    width:40, height:40
  },
  photo: {
    width:width, 
    height:width
  }
})