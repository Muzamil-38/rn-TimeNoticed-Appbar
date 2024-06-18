import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PendingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default PendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    margin: 10,
    backgroundColor: '#efe300',
  },
});
