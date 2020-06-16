import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage, View } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location and slide away', color: '#03A9F4' }
];

const WelcomeScreen = ({ navigation }) => {
    [token, setToken] = useState(null);

    const onSlidesComplete = () => {
        navigation.navigate('Auth')
    }

    useEffect(() => {
        const temporary = async () => {
            let token = await AsyncStorage.getItem('fb_token');
            if (token) {
                navigation.navigate('Main');
                setToken(token);
            } else {
                setToken(false);
            }
        }
        temporary();
    });

    return (
        <>

            {_.isNull(token) ? <AppLoading /> :
                <Slides
                    data={SLIDE_DATA}
                    onComplete={onSlidesComplete}
                />
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

export default WelcomeScreen;