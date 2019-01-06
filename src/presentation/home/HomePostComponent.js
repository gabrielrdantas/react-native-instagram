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
         <View style={styles.cabecalho}>
         <Image 
             source={this.props.profileImage} 
             style={styles.fotoDePerfil} />
         <Text>{this.props.userName}</Text>
         </View>
         <Image source={this.props.photo} style={styles.foto} />
     </View>
     );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin:10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoDePerfil: {
    margin: 10, 
    borderRadius: 20, 
    width:40, height:40
  },
  foto: {
    width:width, 
    height:width
  }
})