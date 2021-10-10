import React, { Component } from 'react';
import { View, StyleSheet, Platform, ImageBackground } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
 const Tab = createBottomTabNavigator();

 const BottomTabs = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name='home' component={Home} />
      <Tab.Screen name='menu' component={Menu}/>

    </Tab.Navigator>
  )
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Menu" component={Menu}
        
        />
      </Stack.Navigator>

      <BottomTabs />
      
    </NavigationContainer>
  );
};






class Main extends Component {
 


  
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