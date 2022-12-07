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

import HomeScreen from './Screens/HomeScreen';
import RegistrationScreen from './Screens/Registration';
import StudentInfoScreen from './Screens/StudentInfo';
import UpdateScreen from './Screens/UpdateStuInfo';
import DeleteScreen from './Screens/DeleteInfo';
import EntryScreen from './Screens/EntrySheet';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Registration" component={RegistrationScreen} />
        <Drawer.Screen name="Students Info" component={StudentInfoScreen} />
        <Drawer.Screen name="Update Students Info" component={UpdateScreen} />
        <Drawer.Screen name="Inactive Account" component={DeleteScreen} />
        <Drawer.Screen name="Entry Sheet" component={EntryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


