import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Tugas/Tugas13/Routes';
import Tugas from './Tugas/Tugas14/App'

export default function App() {
  return (
    <View style={styles.container}>
      < Tugas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
