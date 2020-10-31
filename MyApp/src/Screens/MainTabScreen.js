import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#1e3773',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}

            />

            <Tab.Screen
                name='Details'
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor: '#441e73',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#1e7327',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name='Explore'
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#5eb8b6',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-search" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1e3773'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name='Home' component={HomeScreen} options={{
                title: 'Home',
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#1e3773' onPress={() => {
                            navigation.openDrawer()
                        }} />
                ),
                headerTitleStyle: {
                    textAlign: 'center'
                }
            }} />
        </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#441e73'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name='Details' component={DetailScreen} options={{
                title: 'Details',
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#441e73' onPress={() => {
                            navigation.openDrawer()
                        }} />
                ),
                headerTitleStyle: {
                    textAlign: 'center'
                }
            }} />
        </DetailsStack.Navigator>
    )
}

export default MainTabScreen