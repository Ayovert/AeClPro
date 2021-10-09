import React, { Component } from 'react';
import { View } from 'react-native';
import Main from './components/MainComponent';


export default class App extends Component {
  render(){
    return(
      <View style={{flex:1, flexDirection: 'column', backgroundColor: '#000'}}>
      <Main />
    </View>
    );
  }
    
}





