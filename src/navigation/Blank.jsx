import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Blank() {
  return (
    <View style={styles.container}>
      <Text>n your app!</Text>
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
});
