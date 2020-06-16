import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Notifications } from 'expo';

// import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import { MainBottonTab } from './navigation';
import Screen from './components/Screen';
import configurationStore from './store';
import registerForNotifications from './services/pushNotifications';

export default function App() {

  registerForNotifications();
  Notifications.addListener((notification) => {
    const text = notification.data.text;
    const origin = notification.origin;
    if (origin === 'received' && text) {
      Alert.alert(
        'New Push Notification',
        text,
        [{ text: 'Ok.' }]
      )
    }
  });

  const Tab = createBottomTabNavigator();
  const { persistor, store } = configurationStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
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
