// import React,{useState} from "react";
// import {View,Text,StyleSheet,FlatList,Alert,TouchableWithoutFeedback,keyboard} from 'react-native';
// import Header from './components/Header';
// import TodoItem from './components/TodoItem';
// import AddTodo from './components/AddTodo';

// export default function App()
// {

//   const [todos,setTodos]=useState(
//     [
//       {text:'buy coffe',key:'1'},
//       {text:'create an app',key:'2'},
//       {text:'play on the switch',key:'3'},
//       {text:'my todos',key:'4'  }
//     ]
//   );

//   const pressHandler=(key) =>{

//     setTodos((prevTodos)=>{
//       return prevTodos.filter(todo => todo.key != key);
//     });
//   }

// const submitHandler = (text) =>{

//   if (text.length>3) {
//     setTodos((prevTodos)=>{
//     return [
//       {text:text,key:Math.random().toString()},
//       ...prevTodos
//     ];
//   })
//   }else{
//     Alert.alert('OOPS!','Todos must be over 3 chars long',[
//       {
//         text:'Understood',onPress:()=>console.log('alert closed')
//       }
//     ]);

//   }
  
// }  

 
//     return(
//       <TouchableWithoutFeedback
//       onPress={()=>{
//       //  keyboard.dismiss();
//         console.log("dismissed keyboard")

//       }}>
//           <View style={styles.container}>
//             <Header/>
//             <View style={styles.content}>
//               <AddTodo submitHandler={submitHandler}/>
//               <View style={styles.list}>
//                 <FlatList
//                 data={todos}
//                 renderItem={({item})=>(
//                 <TodoItem item={item} pressHandler={pressHandler}/>
//                 )}
                
//                 />

//               </View>
//             </View>
    


//           </View>
//       </TouchableWithoutFeedback>
//     );
  
// }
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     // paddingTop:40,
//     // paddingHorizontal:20,
//     // alignItems:'center',
//     // justifyContent:'center',
//   },
//   content:{
//     padding:40,
//   },
//   list:{
//     marginTop:20,
//   }
 


// });



////////////learn
import React,{useState} from 'react';
import {StyleSheet,Text,Button,View} from 'react-native';




export default function App()
{
  const [name,setName]=useState('Ishan');
  const [person,setPerson]=useState({
    name:'Ishannnn',age:23
  })

  const clickHandler=()=>{
    setPerson({age:30})
  }
  return (
    <View style={styles.container}>
     <Text>Name is: {name} </Text>
     <Text>His name is {person.name}</Text>
     <Text>His name is {person.age}</Text>

     <View>
        <Button
         title='submit'
         onPress={clickHandler}
         
         />   
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
  }
  
})