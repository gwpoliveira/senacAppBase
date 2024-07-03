import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './src/pages/login/LoginScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import ImageGaleryScreen from "./src/pages/ImageGalery/ImageGaleryScreen";
import CameraComponentScreen from "./src/pages/Camera/CameraComponentScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen}
        options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color,size }) => (
                <Ionicons name= 'log-in-outline' size={24} color="blueGray.900" />
            ),
        }}
        />
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color,size }) => (
                <Ionicons name= 'home-outline' size={24} color="blueGray.900" />
            ),
        }}
        />
        <Tab.Screen name="ImageGalery" component={ImageGaleryScreen}
        options={{
            tabBarLabel: 'Galeria',
            tabBarIcon: ({color,size }) => (
                <Ionicons name= 'image-outline' size={24} color="blueGray.900" />
            ),
        }}
        />
        <Tab.Screen name="Camera" component={CameraComponentScreen}
        options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({color,size }) => (
                <Ionicons name= 'camera-outline' size={24} color="blueGray.900" />
            ),
        }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ImageGalery" component={ImageGaleryScreen} />
          <Stack.Screen name="Camera" component={CameraComponentScreen} />
          <MyTabs/>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}




