import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

export default function UpdateScreen({ navigation, route }) {


    const [rollNoText, setRollNo] = useState();
    const [nameText, setName] = useState();
    const [amountText, setAmount] = useState();


    const UpdateRecordDB = () => {
        var p = route.params.myPost;

        p.rollNo = rollNoText;
        p.name = nameText;
        p.amount = amountText;

        fetch('http://192.168.43.75:3000/api/posts/' + p._id, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
        })
            .then((response) => response.json())
            .catch((error) => console.error(error))
            .finally(() => { });

        Alert.alert("Data saved successfully.");
    };
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input} onChangeText={newText => setRollNo(newText)}
                placeholder="Enter updated Roll No."
            />

            <TextInput
                style={styles.input} onChangeText={newText => setName(newText)}
                placeholder="Enter updated Name"
            />
            <TextInput
                style={styles.input} onChangeText={newText => setAmount(newText)}
                placeholder="Enter updated Amount"
            />

            <Button title='Updated' onPress={UpdateRecordDB} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        borderWidth: 1,
        height: 40,
        width: 200,
        marginRight: 20,
    },
});