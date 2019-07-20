import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import HomeScreen from '../pages/home';
import Second from '../pages/home/second';

const AppNavigator = createMaterialTopTabNavigator ( 
    {
        Medicine: HomeScreen,
        Appointment: Second
    },
    {
        tabBarOptions:{
            activeTintColor:'white',
            inactiveTintColor:'tomato',
            style: {
                backgroundColor:'red'
            }
        },
        
    }

)

export default AppNavigator