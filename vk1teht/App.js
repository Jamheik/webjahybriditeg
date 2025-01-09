import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [age, setAge] = useState("");
  const [limits, setLimits] = useState("");

  const calcLimits = () => {
    if (age <= 0 || isNaN(age)) {
      setLimits("Invalid age");
      return;
    }

    const lowerLimit = Math.round((220 - age) * 0.65);
    const upperLimit = Math.round((220 - age) * 0.85);
    setLimits(`${lowerLimit} - ${upperLimit}`);
  };
  const clearLimits = () => {
    setLimits("");
    setAge("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button onPress={calcLimits} title="Calculate" />
      <Text style={styles.label}>Limits</Text>
      <Text>{limits}</Text>
      <Button onPress={clearLimits} title="Clear" />
      <StatusBar style="auto" />
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
  input: {
    height: 25,
    maxWidth: 250,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cbutton: {
    backgroundColor: "#FF0000",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
});
