import React,{useState} from "react";
import {View,TextInput,Button,Text,StyleSheet} from 'react-native';

export default function App()
{

const  [name,setName]=useState('ishan');
const  [person,setPerson]=useState({name:'Ediriweera',age:40});

const clickHandler= () =>{
  setName('Reshmika');
  setPerson({name:'Ishan',age:23})
}

 
    return(
      <View style={styles.container}>

        <Text>My Name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
       
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