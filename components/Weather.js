import React from "react";
import { StyleSheet, Text, View } from 'react-native';

class Weather extends React.Component{
	render(){
		return(
			<View>
				{this.props.city && this.props.country ?
					<View>
					<Text style = {styles.container}> Location: {this.props.city}, {this.props.country}</Text>
					</View>
					: null}
				{this.props.temperature && (
					<View>
					<Text style = {styles.container}>Temperature: {this.props.temperature}</Text>
					</View>
					)}
				{this.props.humidity && (
					<View>
					<Text style = {styles.container}>Humidity: {this.props.humidity}</Text>
					</View>
					)}
				{this.props.description && (
					<View>
					<Text style = {styles.container}>Condition: {this.props.description}</Text>
					</View>
					)}
				{this.props.weather && (
					<View>
					<Text style = {styles.container}>Weather: {this.props.weather}</Text>
					</View>
					)}
				{this.props.error && (
					<View>
					<Text style = {styles.container}>Condition: {this.props.error}</Text>
					</View>
					)}
			</View>

		);
	}
};
export default Weather;

const styles = StyleSheet.create({
  container: {
      marginTop: 10,
      color: 'red',
      fontSize: 20,
   },
 })