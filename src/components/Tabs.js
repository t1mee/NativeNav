import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Users from '../pages/Users';
import CurrentUser from '../pages/CurrentUser';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="Current User" component={CurrentUser} />
    </Tab.Navigator>
  );
};

export default MyTabs;
