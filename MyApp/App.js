// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './MyScreen/HomeScreen.js';
import Register from './MyScreen/Register.js';
import UserInfo from './MyScreen/UserInfo.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ title: 'Đăng nhập' }} component={HomeScreen} />
        <Stack.Screen name="Register" options={{ title: 'Đăng ký tài khoản' }} component={Register} />        
        <Stack.Screen name="UserInfo" options={{ title: 'Thông tin tài khoản' }} component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;