import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handlePasswordRecovery = () => {
    // Implement password recovery logic, e.g., API call
    console.log('Password recovery email sent to:', email);
    alert('If an account with this email exists, a password reset link has been sent.');
    navigation.navigate('LoginRegistration'); // Redirect back to login
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.instructions}>
          Enter your email address to receive a password reset link.
        </Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoComplete="email"
        />

        <Button
          mode="contained"
          onPress={handlePasswordRecovery}
          style={styles.button}
        >
          Send Recovery Email
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // Added padding to the outer container
  },
  container: {
    width: '90%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#B37B7B',
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    width: '100%',
  },
});
