import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TouchableOpacity,
    Image
} from 'react-native';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class App2 extends Component {
    constructor(){
        super()
        this.state={
            isVisible: false,
            chosenDate:''
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
            
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true,
            


        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,
            
        })
    }
    render() {
        return (
            <View style={styles.container}>
                

                <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                    <Text style={styles.text}>Show DateTimePicker</Text>
                </TouchableOpacity>

                <View style={{justifyContent:'center'}}>
                    <Text style={{ color: 'red', fontSize: 20, marginBottom: 100 }}>
                        {this.state.chosenDate}
                    </Text>
                </View>

                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={'datetime'}
                    is24Hour={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
         flex:1,
        justifyContent:'flex-start',
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