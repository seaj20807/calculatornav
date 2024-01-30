import { useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function History({ route, navigation }) {
  const { calculations } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text>History</Text>
        <FlatList
          data={calculations}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
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
  list: {
    paddingTop: 10,
    alignItems: "center",
  },
});
