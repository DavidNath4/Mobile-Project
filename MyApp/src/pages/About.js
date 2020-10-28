import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text>Kontol About</Text>
            <TouchableOpacity>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>


    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


})