import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Checkbox, Text, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const validateInputs = () => {
    let valid = true;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    return valid;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      console.log('Logging in with:', email, password);
      navigation.navigate('EduServiceHub'); // Navigate to the main hub after login
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navigate to the registration screen
  };

  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecovery'); // Navigate to the password recovery screen
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineLarge">Login</Text>
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
            placeholder="••••••"
          />
          {passwordError && <Text style={styles.errorText}>Password must be at least 6 characters long.</Text>}
          <View style={styles.rememberMeContainer}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
            Login
          </Button>
          <View style={styles.linkContainer}>
            <Button onPress={handleRegister} style={styles.linkButton}>
              Register
            </Button>
            <Button onPress={handlePasswordRecovery} style={styles.linkButton}>
              Forgot Password?
            </Button>
          </View>
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberMeText: {
    color: '#000',
    fontSize: 16,
  },
  loginButton: {
    marginVertical: 8,
  },
  linkContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  linkButton: {
    marginTop: 4,
    color: '#FFD700',
  },
  errorText: {
    color: 'red',
  },
});
