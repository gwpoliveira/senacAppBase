import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Box} from "native-base";


export default function HomeScreen({ navigation }) {
  return (
      <Box flex={1} justifyContent="center" alignItems="center" bg={'blueGray.900'}>
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo à Tela Home!</Text>
            <Text style={styles.text}>Escolha o que deseja fazer:</Text>
            <Box>
                <Button
                    style={styles.button}
                    title="ImageGalery"
                     onPress={() => navigation.navigate('ImageGalery')} // Usa navigation para navegar
                 />
                <Button
                    style={styles.button}
                    title="Camera"
                     onPress={() => navigation.navigate('Camera')} // Usa navigation para navegar
                  />
            </Box>

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
      margin: 10,
  },

});
