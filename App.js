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
import {StyleSheet,Text,Button,View,FlatList,TouchableOpacity} from 'react-native';




export default function App()
{
  const [people,setPeople]=useState([
    {name:'Ishan',age:'23',key:'1'},
    {name:'Ishan1',age:'24',key:'2'},
    {name:'Ishan2',age:'25',key:'3'},
    {name:'Ishan3',age:'26',key:'4'},
    {name:'Ishan4',age:'27',key:'5'},
    {name:'Ishan6',age:'27',key:'6'},
    {name:'Ishan7',age:'27',key:'7'},
    {name:'Ishan8',age:'27',key:'8'},
    
  ]);
  

  const pressHandler=(id)=>{
    console.log(id);

    setPeople((prevPeople)=>{

      return prevPeople.filter(person =>person.key!=id)
    })
  }
 
  return (
    <View style={styles.container}>

    <FlatList

    numColumns={2}
    keyExtractor={(item)=>item.key}
    
    data={people}
    renderItem={({item})=>(

      <TouchableOpacity
      
      onPress={()=>pressHandler(item.key)}
      >
        <Text style={styles.item}>{item.name}={item.age}</Text>

      </TouchableOpacity>

      
    )}
    />

    {/* <ScrollView>

         {
      people.map((data)=>(
          <View key={data.key}>
            <Text style={styles.item}>{data.name} and {data.age}</Text>
          </View>
      )
        

          
        
      )
    }
    
    </ScrollView> */}


   
   
   
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
   paddingTop:40,
   paddingHorizontal:20
  },
  item:{
   
    padding:30,
    marginTop:24,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10
   
  }
  
 })

