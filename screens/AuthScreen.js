import React, { useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

const AuthScreen = (props) => {

    const onAuthComplete = () => {
        if (props.token) {
            props.navigation.navigate('Main');
        }
    }

    // To overcome componentDidUpdate
    useEffect(() => {
        onAuthComplete(props);
    }, [props]);

    props.facebookLogin();
    onAuthComplete();

    return (
        <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

const mapStateToProps = ({ auth }) => {
    return {
        token: auth.token
    }
}
export default connect(mapStateToProps, actions)(AuthScreen);