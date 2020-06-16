import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import { MainBottonTab } from './navigation';
import Screen from './components/Screen';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <Screen>
        <NavigationContainer>
          <Tab.Navigator >
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={{
              tabBarVisible: false
            }} />
            <Tab.Screen name="Auth" component={AuthScreen} options={{
              tabBarVisible: false
            }} />
            <Tab.Screen name="Main" component={MainBottonTab} options={{
              tabBarVisible: false
            }} />
          </Tab.Navigator>
        </NavigationContainer >
      </Screen>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
