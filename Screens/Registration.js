import "react-native-gesture-handler";
import React, { useState } from "react";
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
import Customer from "../Models/Customer";
import { CustomerService } from "../Service/CustomerService";

export default function RegistrationScreen() {
  const [rollNoText, setRollNo] = useState();
  const [nameText, setName] = useState();
  const [amountText, setAmount] = useState();

  const CreateRegisDB = () => {
    var c = new Customer();
    c.rollNo = rollNoText;
    c.name = nameText;
    c.amount = amountText;
    c.date = new Date();

    CustomerService.addCustomer(c);

    Alert.alert("Registration successful");
    setRollNo("");
    setName("");
    setAmount("");
  };

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
        <Text style={styles.label}>Amount :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setAmount(newText)}
          placeholder="Enter Amount"
          value={amountText}
          keyboardType="decimal-pad"
        />

        <Button title="Register" onPress={CreateRegisDB} />
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
});
