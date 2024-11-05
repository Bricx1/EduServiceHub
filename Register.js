import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';

export default function Register() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);

  const validateInputs = () => {
    let valid = true;

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      valid = false;
    } else {
      setConfirmPasswordError(false);
    }

    return valid;
  };

  const handleRegister = () => {
    if (validateInputs()) {
      console.log('Registering with:', firstName, lastName, email, password);
      // Add your registration logic here, e.g., API call

      // Navigate to login screen after successful registration
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineLarge">Register</Text>
          <TextInput
            label="First Name"
            mode="outlined"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            error={emailError}
            placeholder="your@email.com"
          />
          {emailError && <Text style={styles.errorText}>Please enter a valid email.</Text>}
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            error={passwordError}
          />
          {passwordError && <Text style={styles.errorText}>Password must be at least 6 characters long.</Text>}
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            error={confirmPasswordError}
          />
          {confirmPasswordError && <Text style={styles.errorText}>Passwords do not match.</Text>}
          <Button mode="contained" onPress={handleRegister} style={styles.registerButton}>
            Register
          </Button>
          <Button onPress={() => navigation.navigate('Login')} style={styles.linkButton}>
            Already have an account? Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
    padding: 16,
  },
  card: {
    width: '90%',
    maxWidth: 400,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  input: {
    marginBottom: 16,
  },
  registerButton: {
    marginVertical: 8,
  },
  linkButton: {
    marginTop: 8,
    color: '#FFD700',
  },
  errorText: {
    color: 'red',
  },
});
