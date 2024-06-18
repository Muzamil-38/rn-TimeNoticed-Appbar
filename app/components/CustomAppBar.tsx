/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import RefreshIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomAppBarProps = {
  routeName: string;
};

const CustomAppBar = ({ routeName }: CustomAppBarProps) => {
  // Variables
  const [currentTime, setCurrentTime] = useState('Not Yet');
  const [currentRoute, setCurrentRoute] = useState(routeName);

  // Functions
  const handleRefreshButton = async () => {
    const now = new Date();
    const stringDate = now.toLocaleTimeString();
    try {
      await AsyncStorage.setItem('refreshTime', stringDate);
      setCurrentTime(stringDate);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  // Retrieve stored value when the component mounts
  useEffect(() => {
    const loadStoredTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem('refreshTime');
        if (storedTime) {
          setCurrentTime(storedTime);
        }
      } catch (error) {
        console.error('Error loading data', error);
      }
    };
    loadStoredTime();
  }, []);

  useEffect(() => {
    setCurrentRoute(routeName);
  }, [routeName]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Status</Text>
        <Text>{currentRoute}</Text>
        <RefreshIcon
          name="file-refresh"
          size={20}
          onPress={handleRefreshButton}
        />
      </View>
      <TextInput
        placeholder="Search"
        style={styles.input}
        clearTextOnFocus
        clearButtonMode="always"
      />
      <Text style={{ marginBottom: 15 }}>Refresh Time: {currentTime}</Text>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'lightpink',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
