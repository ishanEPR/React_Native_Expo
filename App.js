import React,{Component} from "react";
import {View,TextInput,Button,Text,StyleSheet} from 'react-native';

export default class App extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.boldText}>Hello world</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.boldText}>Ishan Reshmika <Text>1997</Text> Ediriweera </Text>
          <Text>Ishan Reshmika</Text>
          <Text>Ishan Reshmika</Text>
          <Text>Ishan Reshmika</Text>

        </View>
        
      
       
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
     
  }


});