import React,{useState} from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';

export default function App()
{

  const [todos,setTodos]=useState(
    [
      {text:'buy coffe',key:'1'},
      {text:'create an app',key:'2'},
      {text:'play on the switch',key:'3'}
    ]
  );


 
    return(
      <View style={styles.container}>
      {/* header */}
        <View style={styles.content}>
          {/* to form */}
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}
            
            />

          </View>
        </View>
 


      </View>
    );
  
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    // paddingTop:40,
    // paddingHorizontal:20,
    // alignItems:'center',
    // justifyContent:'center',
  },
  // item:{
  //   marginTop:24,
  //   padding:30,
  //   backgroundColor:'pink',
  //   fontSize:24,
  //   marginHorizontal:10,
  //   marginTop:24,

  // }
 


});