import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';


const MainTab = createBottomTabNavigator();

export const MainBottonTab = () => (

    <MainTab.Navigator>
        <MainTab.Screen name="Map" component={MapScreen} />
        <MainTab.Screen name="Deck" component={DeckScreen} />
        <MainTab.Screen name="Review" component={ReviewTab} />
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