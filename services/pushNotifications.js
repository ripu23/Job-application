import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushToken');
    if (previousToken) {
        return;
    } else {
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        } else {
            let token = await Notifications.getExpoPushTokenAsync();
            try {
                await axios.post(PUSH_ENDPOINT, { token: { token } });
            } catch (e) {
                console.log(e);
            }
            AsyncStorage.setItem('pushToken', token);
        }
    }
};