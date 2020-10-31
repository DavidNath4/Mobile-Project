import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})
