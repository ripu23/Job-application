import React from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ data, onComplete }) => {
    const renderLastSlide = (index) => {
        if (index === data.length - 1) {
            return (
                <Button
                    title='Lets go'
                    type='clear'
                    buttonStyle={styles.lastSlideButton}
                    titleStyle={styles.lastSlideTextButton}
                    onPress={onComplete}
                />
            )
        }
    }

    const renderSlides = () => {
        return data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={[styles.slide, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {renderLastSlide(index)}
                </View>
            )
        });
    }

    return (
        <ScrollView
            horizontal
            pagingEnabled
            style={styles.scrollView}
        >
            {renderSlides()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
    },
    lastSlideButton: {
        backgroundColor: '#0288D1'
    },
    lastSlideTextButton: {
        color: 'white'
    }
});

export default Slides;