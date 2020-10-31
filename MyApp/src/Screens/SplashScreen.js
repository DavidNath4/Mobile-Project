import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image source={require('../img/MyApp’s.png')}
                    animation={'bounceIn'}
                    delay={500}
                    resizeMode='stretch'
                />
            </View>
            <Animatable.View
                style={styles.footer}
                animation={'fadeInUpBig'}
            >
                <Text style={styles.title}>Stay Connected!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} >
                        <View style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started! </Text>

                        </View>
                    </TouchableOpacity>
                </View>

            </Animatable.View>

        </View>

    )
}

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 30
    },
    signIn: {
        backgroundColor: '#009387',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 15,
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});