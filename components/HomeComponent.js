import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';


class Home extends Component {


  static navigationOptions = {
    title: 'Home'
};
  render() {
    return (
       
          <ImageBackground source = {require('./images/clans.jpg')} resizeMode='cover' style={styles.backgroundImage} >

            
        <View style={{alignItems: 'center'}}>
          <Text style={styles.h1}>Anime Clans</Text>
          <Text style={styles.h2}>
            Enter into Anime
          </Text>
        </View>
       
        <View >
          <View >
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Menu')}
            />
          </View>
        </View>
        </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    width:null ,
     height: '100%', 
     padding:50
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    paddingTop: 50
  },
    image: {
        width: 500,
        height: 250,
        padding: 15,
        margin: 15,
        alignSelf: 'center'
      },
      buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
      },
      topContainer: {
        //flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15,
      },
      middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 20,
        padding: 10,
      },
      
  
      h1: {
        color: '#fff',
        fontSize: 40,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      h2: {
        color: '#FAE042',
        fontSize: 18,
        marginTop: 8,
        padding: 40,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      button:{
        fontSize:24,
        margin:10,
        padding:15,
       // flex: 1
    }
  });
export default Home;
//<Image  style={styles.image} source={require('./images/clans.jpg')} onPress={() => navigate('Dishdetail', { dishId: item.id })}