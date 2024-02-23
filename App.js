import React, { useState } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Button, StyleSheet } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por enquanto, vamos apenas simular um login bem-sucedido
    setLoggedIn(true);
  };

  return (
    <ImageBackground source={require('./assets/palmeiras2.webp')} style={styles.backgroundImage}>
      {!loggedIn ? (
        <View style={styles.container}>
          {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
          <Text style={styles.title}>Login</Text>
         
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLogin} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Bem-vindo usuario. {username}</Text>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  buttonContainer: {
    width: 300,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
