import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements';
import MapView from 'react-native-maps';

const ReviewScreen = (props) => {
    const renderLikedJobs = () => {
        return props.likedJobs.map(job => {
            const {
                company, formattedRelativeTime, url,
                latitude, longitude, jobtitle, jobkey } = job;
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={true}
                            initialRegion={initialRegion}
                        >
                        </MapView>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title='Apply Now!'
                            buttonStyle={{ backgroundColor: '#03A9F4' }}
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        })
    };

    return (
        <ScrollView>
            {renderLikedJobs()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    italics: {
        fontStyle: 'italic'
    }
});

const mapStateToProps = (state) => {
    return { likedJobs: state.likedJobs }
};

export default connect(mapStateToProps)(ReviewScreen);