import React, { Component } from 'react';
import { View, StyleSheet, Platform, ImageBackground } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from './ShopComponent';
import Clans from './ClansComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';



 const Tab = createBottomTabNavigator();

 const BottomTabs = () =>{
  return(
<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Shop' component={Shop}/>
      <Tab.Screen name='Clans' component= {Clans}/>

    </Tab.Navigator>
    </NavigationContainer>
  )
};

const Drawer = createDrawerNavigator();

const DrawerNav = () =>{
  return(
    
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={MyStack}/>
        <Drawer.Screen name='Shop' component={Shop}/>
        <Drawer.Screen name='Clans' component= {Clans}/>
      </Drawer.Navigator>
  
  )
};

const Stack = createStackNavigator();

const MyStack = () =>{
  return(
    <Stack.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },

      }}
    >
      <Stack.Screen
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
      name='Home' component={DrawerNav}/>
      <Stack.Screen name='Shop' component={Shop}/>
      <Stack.Screen name='Clans' component= {Clans}/>
      
    </Stack.Navigator>
  )
  };
 








class Main extends Component {
  
  render() {
    return (
      <View style={{height:'100%'}}>
        
        <BottomTabs />
          
       
       
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

/*
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
        <Stack.Screen name="Menu" component={Menu}
        
        />
      </Stack.Navigator>

      <DrawerNav/>
    </NavigationContainer>
  );
};
     <MyStack />
*/
