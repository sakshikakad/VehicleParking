import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Alert,
  clicked,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CustomerService } from "../Service/CustomerService";
import { Feather, Entypo } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  // this variable is used to store the all customer data
  const [customerData, setCustomerData] = useState([]);
  // to filter that data
  const [filteredData, setFilteredData] = useState([]);

  // useEffect to call the service to get all data while loading the page
  useEffect(() => {
    setCustomerData(CustomerService.getAllCustomerData());
    setFilteredData(CustomerService.getAllCustomerData());
  }, []);

  // function used to filter the data
  const onSearchTextChange = (txt) => {
    var filteredList = customerData.filter((item) => {
      return item.rollNo.indexOf(txt) > -1;
    });
    setFilteredData(filteredList);
  };

  // ui of item in the list
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listDetailsSection}>
        <View style={styles.listNameSection}>
          <Text style={styles.listFont}>{item.rollNo}</Text>
          <Text style={[styles.listFont, styles.listName]} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
        <View style={styles.listAmountSection}>
          <Text style={styles.listFont2}>Amount : {item.amount}</Text>
        </View>
      </View>
      <Button
        title="Enter"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );

  // separator line for list items
  const separator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked,
          styles.searchMargin,
        ]}
      >
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
          onChangeText={onSearchTextChange}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 5,
  },
  listAmountSection: {
    paddingVertical: 5,
  },
  listNameSection: {
    flexDirection: "row",
  },
  listFont: {
    fontSize: 22,
  },
  listFont2: {
    fontSize: 16,
  },
  listName: {
    paddingRight: 10,
    paddingLeft: 10,
    width: 200,
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
  searchMargin: {
    marginBottom: 10,
  },
});
