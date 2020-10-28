import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Login from './pages/Login';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title='Go to the details screen'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title='Go back to the Home screen'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const LoginScreen = ({ navigation }) => {
    return (
        <View
            behavior="padding"
            style={styles.Wrapper}
        >
            <TextInput
                placeholder='email'
                underlineColorAndroid='white'
                placeholderTextColor='white'
                keyboardType='email-address'
                style={styles.inputField} />
            <TextInput
                placeholder='password'
                underlineColorAndroid='white'
                placeholderTextColor='white'
                secureTextEntry={true}
                style={styles.inputField} />
            <Button
                title='Login'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='Sign up'
                onPress={() => navigation.navigate('SignUp')}
            />

        </View>

    )
}

const SignUpScreen = ({ navigation }) => {
    return (
        <View
            behavior="padding"
            style={styles.Wrapper}>
            <Text style={{ fontSize: 23, color: 'white' }}>Daftar</Text>
            <TextInput
                placeholder='email'
                underlineColorAndroid='white'
                placeholderTextColor='white'
                keyboardType='email-address'
                style={styles.inputField}
            />
            <TextInput
                placeholder='password'
                underlineColorAndroid='white'
                placeholderTextColor='white'
                secureTextEntry={true}
                style={styles.inputField}
            />
            <Button
                title='Sign up'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}




const FooterTab = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default FooterTab


const styles = StyleSheet.create({
    inputField: {
        width: 280,
        color: 'white',
        borderColor: 'white',
        marginTop: 5
    },
    Wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F3A93'
    },
    text: {
        color: 'blue',
        fontSize: 23
    }
});