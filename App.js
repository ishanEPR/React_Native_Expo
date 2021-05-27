import React,{useState} from "react";
import {View,FlatList,Text,StyleSheet} from 'react-native';

export default function App()
{


const  [people,setPeople]=useState([
  {name:'ishan1',id:'1'},
  {name:'ishan2',id:'2'},
  {name:'ishan3',id:'3'},
  {name:'ishan4',id:'4'},
  {name:'ishan5',id:'5'},
  {name:'ishan8',id:'7'},
  
]);


 
    return(
      <View style={styles.container}>
      <FlatList
      data={people}
      numColumns={2}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.name}</Text>
      )}

      
      />

      {/* <ScrollView>
       {people.map((item)=>(
      
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
       
       ))}</ScrollView> */}
     



      
      
       
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
    marginHorizontal:10,
    marginTop:24,

  }
 


});