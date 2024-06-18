/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliveredScreen from './DeliveredScreen';
import PendingScreen from './PendingScreen';
import ProfileScreen from './ProfileScreen';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomAppBar from '../components/CustomAppBar';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  route: {
    name: string;
  };
  focused: boolean;
  color: string;
  size: number;
};

// Define icon components outside of the functional component
const getTabBarIcon = ({route, focused, color, size}: TabBarIconProps) => {
  let iconName: string | undefined;

  if (route.name === 'Pending') {
    iconName = focused ? 'lan-pending' : 'lan-pending'; // Example icon name from Ionicons
  } else if (route.name === 'Delivered') {
    iconName = focused ? 'truck-delivery' : 'truck-delivery'; // Example icon name from Ionicons
  } else if (route.name === 'Profile') {
    iconName = focused ? 'account-settings' : 'account-settings'; // Example icon name from Ionicons
  }

  // Return the Ionicons component with the appropriate name, size, and color
  if (iconName) {
    return <Ionicons name={iconName} size={size} color={color} />;
  } else {
    // Handle case where iconName is undefined (optional)
    return null; // or any fallback UI
  }
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon({route, focused, color, size}), // Call getTabBarIcon with proper props
        header: () => <CustomAppBar routeName={route.name} />,
      })}>
      <Tab.Screen name="Pending" component={PendingScreen} />
      <Tab.Screen name="Delivered" component={DeliveredScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
