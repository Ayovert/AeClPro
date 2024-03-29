import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';



class Home extends Component {



  render() {


    const list = [
      {
        title: '1',
        icon: 'av-timer',
        type :''
      },
      {
        title: '2',
        icon: 'flight-takeoff',
        type :''
      },
      {
        title: '3',
        icon: 'menu',
        type :''
      },
      {
        title: '4',
        icon: 'heartbeat',
        type: 'font-awesome'
      }
    ]
    
    
    const RenderMenuItem2 = ({item}) =>{
      return(
        <View style={styles.listBlockStyle}>
        <ListItem bottomDivider>
          <Icon style={styles.listItemStyle} name={item.icon} type= {item.type ?? null}/>
          <ListItem.Content>
            <ListItem.Title>{item.title} </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        </View>
      );
    }


    return (
      <ScrollView>
        <View style={styles.overlay}></View>
        <Image source={require('./images/clans.jpg')} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.h2}>Welcome To</Text>
          <Text style={styles.h1}>Anime Clans</Text>
        </View>

<View>
              <FlatList
              
                data={list}
                renderItem={RenderMenuItem2}
              
                numColumns= {2}
                />
                </View>
      </ScrollView>




    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
 
    color: '#fff',
    padding: 10,
    justifyContent: 'center',
    
  },
  listBlockStyle: {
    height: 100,
    margin: 5,
    justifyContent: 'center',
    flex:1,
  
   
  },
  backgroundImage: {
    width: null,
    height: '120%',
    padding: 50
  },
  overlay: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 50
  },
  container: {
    paddingTop: 50
  },
  image: {
    width: 500,
    height: 250,
    padding: 15,
    alignSelf: 'center',
    position: 'absolute'
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
    padding: 10,
    position: 'relative'
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
    top: -25
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    padding: 40,
    alignSelf: 'center'
  },
  button: {
    fontSize: 24,
    margin: 10,
    padding: 15,
    // flex: 1
  }
});
export default Home;
//<Image  style={styles.image} source={require('./images/clans.jpg')} onPress={() => navigate('Dishdetail', { dishId: item.id })}


/*
<ImageBackground source = {require('./images/clans.jpg')} resizeMode='cover' style={styles.backgroundImage} >
 </ImageBackground>
<View >
          <View >
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Menu')}
            />
          </View>
        </View>

        <FlatList
                data={list}
                renderItem={RenderMenuItem2}
                keyExtractor = {(item) => item.id.toString()}
                />
*/