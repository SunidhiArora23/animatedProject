import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimatedBackgroundComponent from './components/Animation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedBackgroundComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;