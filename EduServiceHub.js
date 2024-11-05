import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Divider, List } from 'react-native-paper';

const EduServiceHub = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Here, you can add any logout-related logic, like clearing tokens or user data
    console.log('User logged out');

    // Navigate back to the Login screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Ensure this matches your Login screen name
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
        <Text style={styles.title}>EduService Hub</Text>
        <View style={styles.menuItems}>
          <List.Item
            title="Dashboard"
            left={() => <List.Icon icon="view-dashboard" />}
            onPress={() => navigation.navigate('Dashboard')}
          />
          <List.Item
            title="Inbox"
            left={() => <List.Icon icon="email" />}
            onPress={() => navigation.navigate('InboxScreen')}
          />
          <List.Item
            title="Lesson"
            left={() => <List.Icon icon="book" />}
            onPress={() => navigation.navigate('LessonScreen')}
          />
          <List.Item
            title="Task"
            left={() => <List.Icon icon="check" />}
            onPress={() => navigation.navigate('TaskScreen')}
          />
          <List.Item
            title="Group"
            left={() => <List.Icon icon="account-group" />}
            onPress={() => navigation.navigate('GroupScreen')}
          />
        </View>
        <Divider />
        <View style={styles.settingsSection}>
          <List.Item
            title="Settings"
            left={() => <List.Icon icon="cog" />}
            onPress={() => navigation.navigate('SettingsScreen')}
          />
          <List.Item
            title="Logout"
            titleStyle={{ color: 'red' }}
            left={() => <List.Icon color="red" icon="logout" />}
            onPress={handleLogout} // Call handleLogout on press
          />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Avatar.Image size={80} source={{ uri: 'https://example.com/profile.jpg' }} />
          <Text style={styles.greeting}>Good Day Brian!!</Text>
          <Text style={styles.subText}>Continue Your Journey And Achieve Your Target</Text>
          <View style={styles.profileDetails}>
            <Text style={styles.profileText}>Email: BrianDvae@yahoo.com</Text>
            <Text style={styles.profileText}>Contact: +123 456 7890</Text>
          </View>
          <Button mode="outlined" onPress={() => navigation.navigate('EditProfile')} style={styles.editButton}>
            Edit Profile
          </Button>
          <View style={styles.chart}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#FFD700', // Yellow background
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#00509E', // Blue text
  },
  menuItems: {
    flex: 1,
  },
  settingsSection: {
    marginTop: 'auto',
  },
  mainContent: {
    width: '75%',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00509E', // Blue text
  },
  subText: {
    color: '#666',
    textAlign: 'center',
  },
  profileDetails: {
    marginVertical: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  profileText: {
    fontSize: 16,
    color: '#00509E', // Blue text
  },
  editButton: {
    marginTop: 10,
  },
  chart: {
    height: 100,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default EduServiceHub;
