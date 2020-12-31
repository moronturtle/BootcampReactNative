import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Tugas/Tugas13/Routes';
import Tugas from './Tugas/Tugas14/App'
import Tugas15 from './Tugas/Tugas15/index'
import TugasNavigation from './Tugas/TugasNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      < TugasNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
