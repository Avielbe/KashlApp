// CustomLoading.js
import React from 'react';
import { View,Text, ActivityIndicator, StyleSheet } from 'react-native';

const CustomLoading = () => {
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      <Text>ברוכים הבאים לאפליקציית</Text>
      <Text>KashlApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomLoading;
