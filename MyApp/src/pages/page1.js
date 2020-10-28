import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const page1 = () => {
    return (
        <View style={styles.container}>
            <Text>Kontol satu</Text>
        </View>
    )
}

export default page1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


})

