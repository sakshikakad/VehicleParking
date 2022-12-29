import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CustomerService } from "../Service/CustomerService";

export default function UpdateScreen({ route, navigation }) {
  var customerId = route.params.customerId;
  const [rollNoText, setRollNo] = useState();
  const [nameText, setName] = useState();
  const [amountText, setAmount] = useState("0");
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    CustomerService.getCustomerById(customerId).then((data) => {
      setCustomer(data);
      setRollNo(data.rollNo);
      setName(data.name);
    });
  }, [customerId]);

  const CreateRegisDB = () => {
    customer.rollNo = rollNoText;
    customer.name = nameText;
    customer.amount += parseInt(amountText);
    customer.date = new Date();

    console.log(customer);
    CustomerService.updateCustomer(customer);

    Alert.alert("Record updated successful");
    setRollNo("");
    setName("");
    setAmount("0");
    navigation.navigate("Home");
  };

  // confirmation alert
  const createTwoButtonAlert = (id) =>
    Alert.alert("Delete", "Delete the record?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          CustomerService.deleteCustomer(id);
          Alert.alert("Record deleted successful");
          setRollNo("");
          setName("");
          setAmount("0");
          navigation.navigate("Home");
        },
      },
    ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} onPress={() => Keyboard.dismiss()}>
        <Text style={styles.label}>Roll No :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setRollNo(newText)}
          placeholder="Enter Roll No"
          value={rollNoText}
        />
        <Text style={styles.label}>Name :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setName(newText)}
          placeholder="Enter Name"
          value={nameText}
        />
        <Text style={styles.label}>
          Amount : {customer.amount} + {amountText}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setAmount(newText)}
          placeholder="Add amount"
          value={amountText}
          keyboardType="numbers-and-punctuation"
        />

        <View style={styles.buttonSection}>
          <Button title="Update" onPress={CreateRegisDB} />
          <Button
            title="Delete"
            onPress={() => createTwoButtonAlert(customerId)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: "90%",
    padding: 5,
    fontSize: 22,
    marginBottom: 30,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
  },
  buttonSection: {
    flexDirection: "row",
    //justifyContent:"space-between",
    //alignItems:"flex-end",
    alignContent: "flex-end",
  },
});
