// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EduServiceHub from './EduServiceHub';
import LoginScreen from './LoginScreen';
import OtherScreen from './OtherScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EduServiceHub" component={EduServiceHub} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
