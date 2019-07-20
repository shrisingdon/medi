import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

import Main from '../../../Main';
import App2 from '../../../App2';

export default class Second extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                    backgroundColor: '#F5FCFF',
                }}>
                <App2 />

                </View>

                <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                    <Main />
                </View>
            </View>



        );
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        button: {
            width: 250,
            height: 50,
            backgroundColor: '#FF2156',
            borderRadius: 30,
            justifyContent: 'center',
            marginTop: 15

        },
        text: {
            fontSize: 18,
            color: 'white',
            textAlign: 'center'
        }
})