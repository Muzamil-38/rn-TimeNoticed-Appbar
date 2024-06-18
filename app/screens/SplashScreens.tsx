import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/types';

type SplashScreensNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

type SplashScreensProps = {
  navigation: SplashScreensNavigationProp;
  route: RouteProp<RootStackParamList, 'SplashScreen'>;
};

const SplashScreens: React.FC<SplashScreensProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Welcome Here</Text>
    </View>
  );
};

export default SplashScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});
