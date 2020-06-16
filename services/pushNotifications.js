import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushToken');
    console.log(previousToken);
    if (previousToken) {
        console.log('here');
        return;
    } else {
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        console.log('here1');
        console.log(status);
        if (status !== 'granted') {
            return;
        } else {
            let token = await Notifications.getExpoPushTokenAsync();
            console.log('here2', token);
            try {
                await axios.post(PUSH_ENDPOINT, { token: { token } });
            } catch (e) {
                console.log(e);
            }
            console.log('here2', token);
            AsyncStorage.setItem('pushToken', token);
        }
    }
};