import React,{useState} from "react";
import {View,TextInput,Text,StyleSheet} from 'react-native';

export default function App()
{

const  [name,setName]=useState('ishan');
const  [age,setAge]=useState('30');


 
    return(
      <View style={styles.container}>



        <Text>Enter Name:</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. Ishan Reshmika'

        onChangeText={(val1)=>setName(val1)}
        />



        <Text>Enter age:</Text>
        <TextInput
        style={styles.input}
        placeholder='23'
        keyboardType='numeric'

        onChangeText={(val)=>setAge(val)}
        />

        <Text>Name:{name}, age:{age} </Text>
      
       
        
      
       
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
 input:{

   borderWidth:1,
   borderColor:'#777',
   padding:8,
   margin:10,
   width:200,
 }


});