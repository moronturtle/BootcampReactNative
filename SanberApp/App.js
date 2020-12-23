import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeApp from './Tugas/Tugas12/App';

export default function App() {
  return (
    <View style={styles.container}>
      <YoutubeApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
