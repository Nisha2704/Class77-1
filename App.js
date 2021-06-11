
import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import ISSLocationScreen from './Screens/ISSLocationScreen';
import MeteorScreen from './Screens/MeteorsScreen';
import UpdateScreen from './Screens/UpdateScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
  <Stack.Navigator initialRouteName = "Home" screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen}/>
    <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
    <Stack.Screen name = "Updates" component = {UpdateScreen}/>
  </Stack.Navigator>

    </NavigationContainer>
  )


}

export default App