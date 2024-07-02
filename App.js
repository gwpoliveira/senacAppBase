import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './src/pages/login/LoginScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import ImageGaleryScreen from "./src/pages/ImageGalery/ImageGaleryScreen";
import CameraComponetScreen from "./src/pages/Camera/CameraCompontScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ImageGalery" component={ImageGaleryScreen} />
          <Stack.Screen name="Camera" component={CameraComponetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

