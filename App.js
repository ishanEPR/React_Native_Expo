import React,{useState} from "react";
import {View,TextInput,Button,Text,StyleSheet} from 'react-native';

export default function App()
{

const  [name,setName]=useState('ishan');

const clickHandler= () =>{
  setName('Reshmika');
}

 
    return(
      <View style={styles.container}>

        <Text>My Name is {name}</Text>
       
        <View style={styles.buttonContainer}>
          <Button title='Update State' onPress={clickHandler}/>
          
        </View>
        
      
       
      </View>
    );
  
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
 buttonContainer:{
   marginTop:20,
 },


});