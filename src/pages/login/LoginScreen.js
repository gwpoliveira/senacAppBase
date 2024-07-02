import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import {Box} from "native-base";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por enquanto, vamos simplesmente navegar para a tela Home
    navigation.navigate('Home');
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={'blueGray.900'}>
      <View style={styles.container}>
        <Image source={require('../assets/cubo.png')} style={styles.image} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});
