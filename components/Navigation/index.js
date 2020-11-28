import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../Screens/register';
import ConfirmRegister from '../Screens/confirmRegister';
import Home from '../Screens/home';
import {Image} from 'react-native'

const Stack = createStackNavigator();


const MyStack = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false,title:""}}>  
                <Stack.Screen name="register"  component={Register}/>
                <Stack.Screen name="confirmRegister"  component={ConfirmRegister}/>
                <Stack.Screen name="home"  component={Home} options={{headerShown:true}}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
} 

export default MyStack;