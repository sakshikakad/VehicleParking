import { StyleSheet, Text, View, FlatList, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { CustomerService } from "../Service/CustomerService";

export default function HomeScreen({ navigation }) {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    setCustomerData(CustomerService.getAllCustomerData());
  }, []);

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
      <FlatList
        data={customerData}
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
    alignItems: "stretch",
    justifyContent: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding:5
  },
  listAmountSection:{
    paddingVertical:5
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
});
