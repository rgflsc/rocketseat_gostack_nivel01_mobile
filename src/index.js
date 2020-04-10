import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#7159c1'></StatusBar>
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
})