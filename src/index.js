import React, {Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native'
import {createAppContainer} from 'react-navigation'
import AppNavigator from './lib/router'

const AppIndex=createAppContainer(AppNavigator)

export default class App extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
            <StatusBar 
                backgroundColor='red'
                barStyle='light-content'
            />

                <View style={sytles.header}>

                </View>
                <AppIndex />
            </View>
        )
    }
}

const sytles= StyleSheet.create({
    wrapper:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'red',
        paddingHorizontal: 10,
        paddingTop: 5,
    }
})