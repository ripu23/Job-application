import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import FB_KEY from '../config';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            // Token exists
            // Dispatch an action saying FB login is done
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
        } else {
            // Start up FB login process
            doFacebookLogin(dispatch);
        }
    }
};

const doFacebookLogin = async (dispatch) => {
    await Facebook.initializeAsync(FB_KEY);
    const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
    });
    // if login fails
    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }
    await AsyncStorage.setItem('fb_token', token);
    return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
};