import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';


const MainTab = createBottomTabNavigator();

export const MainBottonTab = () => (

    <MainTab.Navigator
        tabBarOptions={{
            activeTintColor: '#03A9F4',
            labelStyle: { fontSize: 12 }
        }}
    >
        <MainTab.Screen
            name="Map"
            component={MapScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="my-location" color={color} size={size} />
                ),
            }} />
        <MainTab.Screen
            name="Deck"
            component={DeckScreen}
            options={{
                tabBarLabel: 'Jobs',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="description" color={color} size={size} />
                ),
            }} />
        <MainTab.Screen
            name="Review"
            component={ReviewTab}
            options={{
                tabBarLabel: 'Review Jobs',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" color={color} size={size} />
                ),
            }} />
    </MainTab.Navigator>

);

const ReviewStack = createStackNavigator();

const ReviewTab = ({ navigation }) => (
    <ReviewStack.Navigator>
        <ReviewStack.Screen name="Review Jobs" component={ReviewScreen} options={{
            title: 'Review',
            headerRight: () => {
                return (
                    <Button
                        title='Settings'
                        type='clear'
                        onPress={() => navigation.navigate('Settings')}
                    />
                );
            }
        }} />
        <ReviewStack.Screen name="Settings" component={SettingsScreen} />
    </ReviewStack.Navigator>
);