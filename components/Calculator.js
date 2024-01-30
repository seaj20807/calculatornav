import { useState } from "react";
import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [calculations, setCalculations] = useState([]);

  const calculate = (operator) => {
    if (isNaN(number1) && isNaN(number2)) {
      alert.alert("Please enter numbers!");
    } else {
      if (operator === "+") {
        setResult(parseFloat(number1) + parseFloat(number2));
        setCalculations([
          ...calculations,
          {
            key:
              number1 +
              " + " +
              number2 +
              " = " +
              (Number(number1) + Number(number2)),
          },
        ]);
      } else {
        setResult(parseFloat(number1) - parseFloat(number2));
        setCalculations([
          ...calculations,
          { key: number1 + " - " + number2 + " = " + (number1 - number2) },
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text>Result: {result}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(number) => setNumber1(number)}
          inputMode="numeric"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(number) => setNumber2(number)}
          inputMode="numeric"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
        <Button
          title="History"
          onPress={() =>
            navigation.navigate("History", { calculations: calculations })
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  fields: {
    alignItems: "center",
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
  },
  buttons: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
