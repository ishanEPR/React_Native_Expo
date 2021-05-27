import React,{useState} from "react";
import {View,ScrollView,Text,StyleSheet} from 'react-native';

export default function App()
{


const  [people,setPeople]=useState([
  {name:'ishan1',key:'1'},
  {name:'ishan2',key:'2'},
  {name:'ishan3',key:'3'},
  {name:'ishan4',key:'4'},
  {name:'ishan5',key:'5'},
  {name:'ishan6',key:'6'},
  {name:'ishan7',key:'7'},
  
]);


 
    return(
      <View style={styles.container}>

      <ScrollView>
       {people.map((item)=>(
      

          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
       
       ))}</ScrollView>
     



      
      
       
      </View>
    );
  
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems:'center',
    // justifyContent:'center',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,

  }
 


});