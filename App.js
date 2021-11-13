import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Alert } from 'react-native';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import getImageForWeather from './components/getImageForWeather';


const API_KEY = "d09262a901e248191e5323a914645c0e";

export default function App() {

  return (
<ImageBackground
            source={{uri:'https://images.unsplash.com/photo-1514161740820-6926c370d87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}}

            style={styles.ImageStyle}>
          
    <View style={styles.container}>
      <Titles />
      <Form />
      <Weather />
    </View>
</ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    padding: 20,
  },
  ImageStyle: {
    flex:1,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
