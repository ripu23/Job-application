import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

const MapScreen = (props) => {

    const initialRegion = {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    };

    const [region, setRegion] = useState(initialRegion);

    const onRegionChangeComplete = (region) => {
        setRegion(region);
    }

    const onButtonPress = () => {
        props.fetchJobs(region, () => {
            // A callback function to navigate
            // to deck screen after fetching the
            // list of all jobs
            props.navigation.navigate('Deck');
        });
    }

    return (
        <View style={styles.container}>
            <MapView
                region={region}
                style={styles.mapView}
                onRegionChangeComplete={onRegionChangeComplete}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title='Search this area'
                    icon={{
                        name: "search",
                        size: 15,
                        color: "white"
                    }}
                    buttonStyle={styles.buttonStyle}
                    onPress={onButtonPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapView: {
        flex: 1
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    },
    buttonStyle: {
        backgroundColor: '#009688',
        alignSelf: 'center'
    }
});

export default connect(null, actions)(MapScreen);