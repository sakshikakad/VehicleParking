import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, TouchableOpacity, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

export default function StudentInfoScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.43.75:3000/api/posts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => { });
    }, []);

    const GoToUpdatePage = (item) => {
        //console.log(item);
        navigation.navigate('Update Students Info', { myPost: item });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.ListView} onPress={() => GoToUpdatePage(item)}>
            <Text>{item.rollNo}</Text>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
        </TouchableOpacity>

    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ListView: {
        margin: 30,
        backgroundColor: 'orange'
    }
});