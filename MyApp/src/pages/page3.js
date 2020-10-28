import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const page3 = () => {
    return (
        <View style={styles.container}>
            <Text>Kontol tiga</Text>
            <TouchableOpacity>
                <Text>About</Text>
            </TouchableOpacity>
        </View>


    )
}

export default page3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


})