import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';





class Clans extends Component {



  render() {


    const list = [
      {
        title: 'Akatsuki',
        icon: 'shirt',
        type :'ionicon'
      },
      {
        title: 'Uzumaki',
        icon: 'cutlery',
        type :'font-awesome'
      },
      {
        title: 'Demon Slayers',
        icon: 'menu',
        type :''
      },
      {
        title: 'Titans',
        icon: 'heartbeat',
        type: 'font-awesome'
      }
    ]


    
    
    const RenderClanCategories = ({item}) =>{
      return(
        <View style={styles.listBlockStyle}>
        <ListItem bottomDivider
        
  Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#00ccff', '#0033ff'],
    start: { x: 2, y: 2 },
    end: { x: 0.2, y: 2 },
  }}
  ViewComponent={LinearGradient}
        >
          <Icon  style={styles.listItemStyle} name={item.icon} type= {item.type ?? null}/>
          <ListItem.Content>
            <ListItem.Title>{item.title} </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        </View>
      );
    }


    return (
      <ScrollView>

<View style={styles.container}>
              <FlatList
              
                data={list}
                renderItem={RenderClanCategories}
              
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
export default Clans;
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