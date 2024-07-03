import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Box} from "native-base";
import CameraComponent from "../../components/CameraComponent";


export default function CameraComponentScreen({ navigation }) {
  return (
      <Box flex={1} justifyContent="center" alignItems="center" bg={'blueGray.900'}>
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo à Câmera</Text>
            <Text style={styles.text}>Clique no botão para podertestar as câmera frontaes e trazeira:</Text>
            <CameraComponent />
        </View>
      </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

  },
  title: {
      color: 'white',
      fontSize: 24,
  },
  text:{
      color: 'white',
      fontSize: 16,
      margin: 8,
  }
  });