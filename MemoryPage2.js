import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "../components/TitleBar";

export default function MemoryPage2() {
  const checkAnswer = (index) => {
    if (index === 2) {
      Alert.alert("정답입니다!", "잘 기억했어요 ");
    } else {
      Alert.alert("오답입니다.", "앞에서 본 모양과 달라요.");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <TitleBar text="앞에서 본 모양을 찾아보세요." />

     
        <TouchableOpacity style={styles.row} onPress={() => checkAnswer(1)}>
          <Image source={require("../assets/option1.png")} style={styles.optionImage} />
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.row} onPress={() => checkAnswer(2)}>
          <Image source={require("../assets/option2.png")} style={styles.optionImage} />
        </TouchableOpacity>

   
        <TouchableOpacity style={styles.row} onPress={() => checkAnswer(3)}>
          <Image source={require("../assets/option3.png")} style={styles.optionImage} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  row: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 30,
    alignItems: "center",
  },
  optionImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

