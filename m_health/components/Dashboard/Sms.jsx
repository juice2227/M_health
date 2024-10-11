import { Button, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React, { useState } from 'react'
import * as SMS from 'expo-sms';

const Sms = () => {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const checkSMS = async () => {
        if (Platform.OS !== 'web') {
            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                alert("SMS is available");
            } else {
                alert("SMS is not available on this device");
            }
        } else {
            alert("SMS functionality is not available on web");
        }
    }

    const sendSMS = async () => {
        if (Platform.OS !== 'web') {
            try {
                const { result } = await SMS.sendSMSAsync([number], message);
                if (result === SMS.SentStatus.SENT) {
                    alert("Message has been sent successfully");
                } else {
                    alert("Message send failed");
                }
            } catch (error) {
                alert(`Error sending SMS: ${error.message}`);
            }
        } else {
            alert("Cannot send SMS from web platform");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SMS</Text>
            <Button
                title='Check SMS availability'
                onPress={checkSMS}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your phone number'
                value={number}
                onChangeText={(text) => setNumber(text)}
                keyboardType='phone-pad'
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your message'
                value={message}
                onChangeText={(text) => setMessage(text)}
                multiline
            />
            <Button
                title='Send message'
                onPress={sendSMS}
            />
        </View>
    )
}

export default Sms

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 10
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
})
//12095839679
//+18777804236...number