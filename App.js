////////////learn
import React,{useState} from 'react';
import {StyleSheet,Text,Button,View,FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import Sandbox from './components/sandbox';



export default function App()
{
  const [todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'},
  ])
  
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);

    })
  }

  const submitHandler=(text)=>{
    if(text.length>3)
    {
      setTodos((prevTodos)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ];
    })
    }
    else{
      Alert.alert('OOPS!',"Todos must be over 3 char long",
      [
        {text:'Understood',onPress:()=> console.log('alert closed')}
      ]);
    }
  }


  return (


    // <Sandbox/>

    <TouchableWithoutFeedback
    onPress={()=>{
    //  console.log('dismissed keyboard');
      Keyboard.dismiss();
    }}>
    
    
        <View style={styles.container}>
        <Header/>
          <View style={styles.content}>

          <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item})=>(
                  <TodoItem item={item}
                  pressHandler={pressHandler}/>
                )}
              />
            </View>
          
          </View>


        </View>

    </TouchableWithoutFeedback>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  
  },
  content:{
   
    padding:40,
    // backgroundColor:'pink',
    flex:1
   
   
  },
  list:{
    marginTop:20,
    // backgroundColor:'yellow',
   flex:1,
  }
  
 })

