import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '../utils'

export default function ReloadIcon({ load }) {
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name="reload" size={24} color={colors.SECONDARY_COLOR} />
        </View>
    );
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 50,
        right: 20,
    }
})
