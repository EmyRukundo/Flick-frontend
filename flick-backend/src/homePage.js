import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View , ImageBackground, Button } from 'react-native';


export default function homePage({navigation}) {
  return (
    <View>
      {/* <SignUp /> */}
      <ImageBackground source={require( '../src/img/homePage.png')} style={{width: '100%', height: '100%'}}>
      <View   style={styles.registerButton}>
        <Button 
        title='Register Now'
        onPress={() => navigation.navigate('SignUp', {name: 'Emy'})}
        />
      </View>
      </ImageBackground>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', 
  },
  registerButton: {
    marginTop: 350,
    width: 200,
    marginLeft: 100,
    fontSize:20,
    fontWeight: '100',
  },
});
