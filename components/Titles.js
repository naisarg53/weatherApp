import React from "react";
import { StyleSheet, Text, View } from 'react-native';

class Titles extends React.Component {
	render(){
		return(
			<View>
				<Text style={styles.header}>Weather Finder</Text>
				<Text style={styles.body}>Find out temperature, conditions and more...</Text>
			</View>	
		);
	}
};

export default Titles;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    color : 'red',
    padding : 10,
    marginLeft : 25,
    marginTop : 20,  
    fontSize  : 30,
  },
  body: {
    backgroundColor: '#fff',
    color : 'blue',
    fontSize  : 15,
  },
});

