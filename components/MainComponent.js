import React, { Component } from 'react';
import { View, StyleSheet, Platform, ImageBackground } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  
  render() {
 
  


    return (
      <View style={{height:'100%'}}>


       <MyStack />
       
        </View>
    );
  }
}
const styles = StyleSheet.create({

  
    backgroundImage:{
      width:null ,
       height: null, 
       padding:50
    }
});

export default Main;

//<ImageBackground source = {require('./images/clans.jpg')} resizeMode='cover' style={styles.backgroundImage} resizeMethod='scale' >  </ImageBackground>



//<Menu dishes={this.state.dishes} />