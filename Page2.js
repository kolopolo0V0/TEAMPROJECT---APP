import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page2({ navigation }) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  const checkAnswer = () => {
    if (answer1 === "4" && answer2 === "5") {
      Alert.alert("정답입니다!", "다음 페이지로 이동합니다.");
      navigation.navigate("Page3");
    } else {
      Alert.alert("오답입니다", "다시 시도해보세요!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* 상단 타이틀 */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>예시와 같은 도형을 모두 찾아주세요.</Text>
      </View>

      {/* 예시 박스 */}
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>예 시</Text>
        <Image
          source={require("../assets/shape1.png")}   // ← 실제 존재하는 파일명
          style={styles.exampleImg}
        />
        <Text style={styles.label}>마름모</Text>
      </View>

      {/* 도형 3줄 */}
      <View style={styles.shapeRow}>
        <Image source={require("../assets/shape1.png")} style={styles.shape} />
        <Image source={require("../assets/circle.png")} style={styles.shape} />
        <Image source={require("../assets/shape1.png")} style={styles.shape} />
      </View>

      <View style={styles.shapeRow}>
        <Image source={require("../assets/figure.png")} style={styles.shape} />
        <Image source={require("../assets/circle.png")} style={styles.shape} />
        <Image source={require("../assets/shape1.png")} style={styles.shape} />
      </View>

      <View style={styles.shapeRow}>
        <Image source={require("../assets/shape1.png")} style={styles.shape} />
        <Image source={require("../assets/triangle.png")} style={styles.shape} />
        <Image source={require("../assets/circle.png")} style={styles.shape} />
      </View>

      {/* 숫자 입력 문제 */}
      <View style={styles.questionBox}>
        <Text style={styles.question}>1. 마름모는 모두 몇 개인가요?</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="숫자 입력"
          value={answer1}
          onChangeText={setAnswer1}
        />

        <Text style={styles.question}>2. 마름모 이외 도형들은 무엇인가요?</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="숫자 입력"
          value={answer2}
          onChangeText={setAnswer2}
        />
      </View>

      {/* 다음 버튼 */}
      <Pressable style={styles.nextBtn} onPress={checkAnswer}>
        <Text style={styles.nextBtnText}>정답 확인</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, alignItems: "center", backgroundColor: "#fff" },

  /* 상단 타이틀바 */
  titleBar: {
    width: "100%",
    backgroundColor: "#567586",
    paddingVertical: 10,
    paddingLeft: 25,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  titleText: { color: "white", fontSize: 15, fontWeight: "bold" },

  /* 예시 박스 */
  exampleBox: {
    width: "85%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  exampleText: { fontSize: 16, fontWeight: "bold" },
  exampleImg: { width: 60, height: 60 },
  label: { fontSize: 16 },

  /* 도형 row */
  shapeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 10,
  },
  shape: { width: 70, height: 70 },

  /* 문제 */
  questionBox: {
    marginTop: 20,
    width: "90%",
  },
  question: { fontSize: 16, marginVertical: 10 },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#aaa",
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 6,
  },

  /* 버튼 */
  nextBtn: {
    backgroundColor: "#567586",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  nextBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
