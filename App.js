import React,{useState} from "react";
import {View,Text,StyleSheet,FlatList,Alert} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App()
{

  const [todos,setTodos]=useState(
    [
      {text:'buy coffe',key:'1'},
      {text:'create an app',key:'2'},
      {text:'play on the switch',key:'3'},
      {text:'my todos',key:'4'}
    ]
  );

  const pressHandler=(key) =>{

    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

const submitHandler = (text) =>{

  if (text.length>3) {
    setTodos((prevTodos)=>{
    return [
      {text:text,key:Math.random().toString()},
      ...prevTodos
    ];
  })
  }else{
    Alert.alert('OOPS!','Todos must be over 3 chars long',[
      {
        text:'Understood',onPress:()=>console.log('alert closed')
      }
    ]);

  }
  
}  

 
    return(
      <View style={styles.container}>
     <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item})=>(
             <TodoItem item={item} pressHandler={pressHandler}/>
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
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
 


});