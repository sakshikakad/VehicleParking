import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Keyboard, View, Button, clicked } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { ListItem, SearchBar } from "react-native-elements";
import { Feather, Entypo } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import { SearchBar } from 'react-native-screens';

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={
                clicked
                    ? styles.searchBar__clicked
                    : styles.searchBar__unclicked
            }>
                {/* search Icon */}

                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                />

                {/* cross Icon, depending on whether the search bar is clicked or not */}

                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} />
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}

            {clicked && (
                <View>
                    <Button
                        title='Cancle'
                        onPress={() => {
                            Keyboard.dismiss();
                        }}></Button>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },

    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },

    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});
