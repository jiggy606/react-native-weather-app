import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { colors } from '../utils'
const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function WeatherDetails() {
    return (
        <View>
            <Text>WeatherDetails</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherDetails: {
        margin: 'auto',
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
});