import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "../components/TitleBar";

export default function MemoryPage1({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <TitleBar text="다음 모양을 잘 기억하세요." />

        <Image source={require("../assets/shape1.png")} style={styles.image} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Memory2")}
        >
          <Text style={styles.buttonText}>다음으로</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, paddingHorizontal: 20, alignItems: "center", backgroundColor: "#fff" },

  image: { width: 250, height: 250, resizeMode: "contain", marginTop: 40 },
  button: {
    backgroundColor: "#0E788C",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: { color: "#fff", fontSize: 17, fontWeight: "600" }
});
