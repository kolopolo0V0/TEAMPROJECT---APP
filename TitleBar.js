import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TitleBar({ text }) {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    width: "100%",
    backgroundColor: "#0E788C",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 25,
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 15,   
    fontWeight: "bold",
  },
});
