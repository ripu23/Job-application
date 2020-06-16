import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Swipe from '../components/Swipe';
import * as actions from '../actions';

const DeckScreen = (props) => {

    const renderCard = (job) => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card
                title={job.jobtitle}
            >
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={true}
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>{job.snippet}</Text>
            </Card>
        );
    }

    const renderNoMoreCards = () => {
        return (
            <Card title='No More Jobs!!!' containerStyle={{ height: 170 }} >
                <View>
                    <Text>Change your search area to find more jobs. Jobs are shown within 10
                    miles of chosen area.</Text>
                </View>
                <Button
                    title='Back to Map'
                    icon={
                        <Icon
                            name="my-location"
                            size={20}
                            color="white"
                        />
                    }
                    buttonStyle={{ backgroundColor: '#03A9F4' }}
                    onPress={() => props.navigation.navigate('Map')}
                />
            </Card >
        );
    }

    return (
        <View style={styles.container}>
            <Swipe
                data={props.jobs}
                renderCard={renderCard}
                renderNoMoreCards={renderNoMoreCards}
                keyProp='jobkey'
                onSwipeRight={job => props.likeJob(job)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
});

const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
};

export default connect(mapStateToProps, actions)(DeckScreen);