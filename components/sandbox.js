import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

export default function sandbox()
{
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>



    );
}

const styles=StyleSheet.create({

    container:{
       // flex:1,
       //main-axis :-row, cross-axis:- column
       justifyContent:'space-around',
       alignItems:'flex-start',
        flexDirection:'row',
        paddingTop:40,
        backgroundColor:'#ddd',
       
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        backgroundColor:'gold',
        padding:20,
    },
    boxThree:{
        backgroundColor:'coral',
        padding:30,
    },
    boxFour:{
        backgroundColor:'skyblue',
        padding:40,
    },

});