import React from 'react';
import {View,StyleSheet,Button,TextInput, Text } from 'react-native';

export default class SignUp extends React.Component {
  
    state = {
        name: '', email: '', gender: '', phone: '', password: ''
    }
    render (){
        return(
            <View>
                  <View>
                    <Text style={styles.title}> Registratio Form</Text>
                </View>
            <View>
                <TextInput
                style={styles.input}
                placeholder='Name'
                placeholderTextColor='white'
                autoCapitalize='none'
                onChangeText={val => this.onChangeText('name', val)}
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='Email'
                 placeholderTextColor='white'
                 autoCapitalize='none'
                 onChangeText={val => this.onChangeText('email', val)}
                 />
                 <TextInput 
                 style={styles.input}
                 placeholder='gender'
                 placeholderTextColor='white'
                 autoCapitalize='none'
                 onChangeText={val => this.onChangeText('gender', val)}
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='phone'
                 placeholderTextColor='white'
                 autoCapitalize='none'
                 onChangeText={val => this.onChangeText('phone', val)}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder='password'
                  placeholderTextColor='white'
                  autoCapitalize='none'
                  onChangeText={val => this.onChangeText('phone', val)}
                   />
                   <View>
                   <Button 
                    style={styles.Button}
                   title='Sign Up'
                   onPress={this.SignUp}
                    />
                    </View>
            </View>
            </View>

        )}
}

const styles = StyleSheet.create ({

    title: {
        fontWeight: '500',
        borderRadius: 5,
        width: 220,
        height: 35,
        fontSize: 20,
        color: 'white',
        marginBottom: 50,
        marginLeft: 70,
        paddingLeft: 25,
        paddingTop: 5,
        backgroundColor: '#0F100F'
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: '#07660A'
    }
  
})
