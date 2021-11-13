import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView,ImageBackground, TextInput, StyleSheet } from 'react-native';
import Weather from "./Weather";
import getImageForWeather from './getImageForWeather';

class Form extends React.Component{
 
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    weather: undefined,
  }

  handleCity = (text) => {this.setState({city: text})}
  handleCountry = (text) => {this.setState({country: text})}

  getWeather = async () => {

    const {city} =this.state;
    const {country} =this.state;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=c375091bd2ba6fcd254cd777efd1184d`);

    const data = await api_call.json();

    console.log(data);

    if(city && country){

      this.setState({
        temperature:(data.main.temp - 273.15),
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        weather:data.weather[0].main,
      }); 
    }else{

      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        weather:undefined,
        error: "Please Enter Values"
      }); 
    }
  }


  render(){
    const {city,country,weather}=this.state;
    return(

<ImageBackground 
            source={getImageForWeather(weather)}
            style={styles.imageContainer}
            imageStyle={styles.image} 
            >
      <View>
      
        <TextInput style = {styles.input} 
          underlineColorAndroid = 'transparent'
          placeholder = 'Enter City'
          placeholderTextColor = 'grey'
          autoCapitalize = 'none'
          value={city}
          onChangeText = {this.handleCity}
                    />
        
        <TextInput style = {styles.input} 
          underlineColorAndroid = 'transparent'
          placeholder = 'Enter country'
          placeholderTextColor = 'grey'
          autoCapitalize = 'none'
          value={country}
          onChangeText = {this.handleCountry}/>

        <TouchableOpacity style = {styles.submitButton} onPress={this.getWeather}>
               <Text style = {styles.submitButtonText}>Get Weather</Text>
          </TouchableOpacity>

          <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          weather={this.state.weather}
          error={this.state.error} />
         </View>
         </ImageBackground>
    );
  }
};
export default Form;

const styles = StyleSheet.create({
  input: {
      height: 40,
      width:300,
      borderBottomColor : 'grey',
      borderBottomWidth : 1,
      padding : 10,
      marginTop: 10,
   },

  imageContainer: {
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      height: 40,
      width: 150,
      marginTop: 10,
      marginLeft: 70,
      alignItems: 'center'
   },
   submitButtonText:{
      color: 'white'
   }
})