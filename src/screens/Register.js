
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const SignUp = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#000' }}>
                        FOX
                    </Text>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 22, color: '#64beff' }}>
                        HUB
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#000' }}>
                        Welcome Back,
                    </Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#a5a5a5' }}>
                        Sign up to continue
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color='#a5a5a5'
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#a5a5a5'
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="lock-outline"
                            color='#a5a5a5'
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={STYLES.btnPrimary}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                            Sign Up
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View style={STYLES.line}></View>
                        <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
                        <View style={STYLES.line}></View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign up with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../../assets/images/facebook.png')}
                            />
                        </View>
                        <View style={{ width: 10 }}></View>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign up with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../../assets/images/google.png')}
                            />
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginTop: 40,
                        marginBottom: 20,
                    }}>
                    <Text style={{ color: '#a5a5a5', fontWeight: 'bold' }}>
                        Already have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#ff2d5f', fontWeight: 'bold' }}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const STYLES = StyleSheet.create({
    inputContainer: { flexDirection: 'row', marginTop: 20 },
    input: {
        color: '#a5a5a5',
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: '#a5a5a5',
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
    },
    inputIcon: { marginTop: 15, position: 'absolute' },
    btnPrimary: {
        backgroundColor: '#28388f',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
    },
    btnImage: { width: 20, height: 20, marginLeft: 5 },

    line: { height: 1, width: 30, backgroundColor: '#a5a5a5' },
});
export default SignUp;