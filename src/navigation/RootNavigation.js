import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';
import AuthNavigation from '../navigation/AuthNavigation';
import BottomTabsNavigation from './BottomTabsNavigation';
// import DrawerNavigation from './DrawerNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />

      {/* <BottomTabsNavigation /> */}
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;
