import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Box} from "native-base";
import ImagePickerGalery from "../../components/ImagePicker";

export default function ImageGaleryScreen() {
  return (
      <Box flex={1} justifyContent="center" alignItems="center" bg={'blueGray.900'}>
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo à ImageGalery</Text>
            <Text style={styles.text}>Clique no botão para poder escolher sua foto:</Text>
            <ImagePickerGalery />
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