// Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Life Automation</Text>
      <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
      <Button title="Timetable" onPress={() => navigation.navigate('Timetable')} />
      <Button title="Quizzes" onPress={() => navigation.navigate('Quizzes')} />
      <Button title="Notes" onPress={() => navigation.navigate('Notes')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
