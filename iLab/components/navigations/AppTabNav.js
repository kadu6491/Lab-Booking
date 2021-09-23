import React from 'react'

import { Button, Settings, Text, View } from 'react-native'
import {AntDesign, FontAwesome5, Entypo} from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Reserve from '../screens/Reserve';
import LabRooms from '../screens/LabRooms';
import Accounts from '../screens/Accounts';

const Tab = createBottomTabNavigator()

export default function AppTabNav(props){
    return (
       <NavigationContainer>
           <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size }) => {
                        if(route.name === "Home" && focused === true){
                            return <Entypo 
                                name="home"
                                size={size}
                                color={color}
                            />
                        }
                        else {
                           return <AntDesign 
                                name="home"
                                size={size}
                                color={color}
                            />
                        }
                    },
                    headerShown: false,
                    // tabBarInactiveTintColor: "#6c757d",
                    tabBarActiveTintColor: "#eee",
                    tabBarStyle: {backgroundColor: "#232323"}
                     
                })}
           >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                />
                <Tab.Screen 
                    name="New Reserve"
                    component={Reserve}
                    options={{
                        tabBarIcon: ({color, size}) => {
                            return <AntDesign 
                                name="pluscircle"
                                size={size}
                                color={color}
                            />
                        }
                    }}
                />
                <Tab.Screen 
                    name="Lab Rooms"
                    component={LabRooms}
                    options={{
                        tabBarIcon: ({focus, color, size}) => {
                            return <FontAwesome5 
                                name="laptop-house"
                                size={size}
                                color={color}
                            />
                        }
                    }}
                />
                <Tab.Screen 
                    name="Accounts"
                    component={Accounts}
                    options={{
                        tabBarIcon: ({color, size}) => {
                            return <FontAwesome5 
                                name="user-graduate"
                                size={size}
                                color={color}
                            />
                        }
                    }}
                />
           </Tab.Navigator>
       </NavigationContainer>
    )
}
