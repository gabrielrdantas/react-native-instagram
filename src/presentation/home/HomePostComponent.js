import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class HomePostComponent extends Component {

  loadIcon(isLiked){
    return isLiked ?  require('../../assets/images/s2-checked.png') : 
                      require('../../assets/images/s2.png')
  }
  
  like(){
    const updatedPhoto = {
      ...this.state.photo,
      isLiked: !this.state.foto.isLiked
    }
  
    this.setState({photo: updatedPhoto});
  }

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
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image 
              style={styles.likesButton}
              source={this.loadIcon(this.props.isLiked)} />
          </TouchableOpacity>
        </View>
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
  },
  likesButton: {
    width: 40,
    height: 40
  },
  footer: {
    margin: 10
  }
})