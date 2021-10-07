import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, ProgressiveViewIOS } from 'react-native';


class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>AlligatorChef</Text>
          <Text style={styles.h2}>
            Providing cajun bacon recipes since 1987.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={require('./images/uthappizza.png')} 
          style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.onPress()}
              color="#512DA8"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
      },
      buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
      },
      topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
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
      }
  });
export default Home;