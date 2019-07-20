import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Note from '../../../Note';
import Main from '../../../Main';
import App2 from '../../../App2';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import firebase from 'firebase';
import {Header} from './components/common';


export default class HomeScreen extends Component{
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD_LWZ6JSBU1uii0JRwBZF3mJdicISmwzQ",
            authDomain: "qwerty-2234d.firebaseapp.com",
            databaseURL: "https://qwerty-2234d.firebaseio.com",
            projectId: "qwerty-2234d",
            storageBucket: "",
            messagingSenderId: "436338018174",
            appId: "1:436338018174:web:9fad5a894a053396"
        });
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    
                    backgroundColor: '#F5FCFF',
                }}>
                    <App2/>

                </View>

                <View style={{flex:2, justifyContent:'flex-start'}}>
                    <Main/>
                </View>
            </View>

             
            
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },
    button:{
        width: 250,
        height: 50,
        backgroundColor:'#FF2156',
        borderRadius: 30,
        justifyContent:'center',
        marginTop:15

    },
    text:{
        fontSize:18,
        color:'white',
        textAlign:'center'
    }
})