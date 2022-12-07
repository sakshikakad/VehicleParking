import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

export default function EntryScreen({ navigation }) {

    return (
        <View style={{
            flex: 1, alignment: 'center',
            justifyContent: 'center'
        }}>
            <Text>  Entry Sheet Page  </Text>
        </View>
    );
}