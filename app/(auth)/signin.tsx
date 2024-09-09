// (tabs)/signin.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, isLoaded } = useSignIn();

  const handleSignIn = async () => {
    if (!isLoaded) {
      return; // Clerk is not yet loaded, so prevent sign-in attempts
    }

    try {
      // Attempt to sign in using Clerk's signIn function
      await signIn.create({
        identifier: email,
        password,
      });
    } catch (err) {
      console.error('Failed to sign in:', err);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
