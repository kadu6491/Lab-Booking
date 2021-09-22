import React, {useState} from 'react';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Home from '../screens/Home';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator()



function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen 
                name="Home" component={Home}
                options={{
                   headerStyle: {backgroundColor: "white"},
                   headerTintColor: "#000",
                   headerTitle: "Home",
                }}
            />
        </Drawer.Navigator>
    )
}

export default function AppDrawerNavigation() {
    return (
        <NavigationContainer >
            <MyDrawer />
        </NavigationContainer>
    )
}