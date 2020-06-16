import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as actions from '../actions';

const SettingsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Button
                title='Reset Liked Jobs'
                icon={
                    <Icon
                        name="delete-forever"
                        size={20}
                        color="white"
                    />
                }
                buttonStyle={{ backgroundColor: '#F44336' }}
                onPress={() => props.clearLikedJobs()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default connect(null, actions)(SettingsScreen);