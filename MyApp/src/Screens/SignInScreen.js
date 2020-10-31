import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Dimensions,
    TextInput,
    StatusBar
} from 'react-native'

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

import { AuthContext } from '../../components/context';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({

        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        // isValidUser: true,
        // isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })

        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const UpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View style={styles.header}>
                <Animatable.Text animation={'bounceIn'}
                    delay={500}
                    resizeMode='stretch' style={styles.text_header}>Welcome!</Animatable.Text>
            </View>
            <Animatable.View
                style={styles.footer}
                animation={'fadeInUpBig'}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <Feather
                        name='user'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation={'bounceIn'} >
                            <Feather
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>

                <Text style={[styles.text_footer, { marginTop: 10 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={UpdateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.button}>

                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { signIn() }}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Sign In</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn2, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>

                </View>

            </Animatable.View>
        </View>
    )
}




export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 90
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        backgroundColor: '#009387',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signIn2: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    forgot: { color: '#009387', marginTop: 15 }
});
