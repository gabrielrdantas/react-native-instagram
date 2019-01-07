import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

const width = Dimensions.get('screen').width;
const userID = 99;

export default class HomePostComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likesUsers: props.likesUsers,
      textComment: ''
    }
  }

  loadIcon(likesUsers){
    return likesUsers.indexOf(userID) > -1 ?  require('../../assets/images/s2-checked.png') : 
                      require('../../assets/images/s2.png')
  }
  
  setlikesPhoto(){
    let newListlikesUsers = [];
    if (this.state.likesUsers.indexOf(userID) === -1) {
      newListlikesUsers = this.state.likesUsers.concat(userID)
    } else {
      newListlikesUsers = this.state.likesUsers.filter(userId => userId !== userID);
    }
    this.setState({
      likesUsers: newListlikesUsers
    });
  }

  showLikes(likers) {
    if (likers.length < 1) {
      return;
    }
    return (<Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas': 'curtida'}</Text>)
  }

  showLegend(legend) {
    if(legend === '') {
      return;
    }
    return (
      <View style={styles.legend}>
        <Text style={styles.titleLegend}>{this.props.userName}</Text>
        <Text>{legend}</Text>
      </View>
    );
  }

  addComment() {
    console.warn(this.state.textComment);
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
          <TouchableOpacity onPress={() => this.setlikesPhoto()}>
            <Image 
              style={styles.likesButton}
              source={this.loadIcon(this.state.likesUsers)} />
          </TouchableOpacity>
          {this.showLikes(this.state.likesUsers)}
          {this.showLegend(this.props.legend)}

          {this.props.comments.map(item => 
            <View style={styles.comment} key={item.userId}>
              <Text style={styles.titleComment}>{item.userName}</Text>
              <Text>{item.comment}</Text>
            </View>
          )}

          <View style={styles.newComment}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione um comentário..." 
            onChangeText={text => this.setState({textComment: text})} 
            ref={input => this.inputComment = input} />
            <TouchableOpacity onPress={this.addComment.bind(this)}>
                <Image style={styles.icon} source={ require('../../assets/images/send.png') } />
            </TouchableOpacity>
          </View>

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
    width:40, 
    height:40
  },
  photo: {
    width:width, 
    height:width
  },
  likes: {
    fontWeight: 'bold'
  },
  botaoDeLike: {
    marginBottom: 10,
    width: 40,
    height: 40
  },
  likesButton: {
    width: 40,
    height: 40
  },
  footer: {
    margin: 10
  },
  legend: {
    flexDirection: 'row'
  },
  titleLegend: {
    fontWeight: 'bold',
    marginRight: 5
  },
  input: {
    flex: 1,
    height: 40
  },
  comment: {
    flexDirection: 'row'
  },
  titleComment: {
    fontWeight: 'bold',
    marginRight: 5
  },
  newComment: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30
  }
})