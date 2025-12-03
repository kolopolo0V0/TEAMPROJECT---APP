import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "../components/TitleBar";

export default function ClockPage1({ navigation }) {
  const [selectedClock, setSelectedClock] = useState(null);
  const [correct, setCorrect] = useState({
    left: false,   // 왼쪽 = 10:00
    right: false,  // 오른쪽 = 5:00
  });

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  // 정답 체크
  const selectAnswer = (time) => {
    if (!selectedClock) {
      Alert.alert("먼저 시계를 선택하세요.");
      return;
    }

    const isLeftCorrect = selectedClock === "left" && time === "10:00";
    const isRightCorrect = selectedClock === "right" && time === "5:00";

    if (isLeftCorrect || isRightCorrect) {
      setCorrect({
        ...correct,
        [selectedClock]: true,
      });
      Alert.alert("정답!", "정답을 맞췄습니다!");
    } else {
      Alert.alert("오답!", "선택한 시계의 정답이 아닙니다.");
    }
  };

  // 다음 페이지 이동
  const handleNext = () => {
    if (!correct.left || !correct.right) {
      Alert.alert("안내", "위의 시계 두 문제를 모두 풀어주세요.");
      return;
    }
    if (hour === "" || minute === "") {
      Alert.alert("안내", "현재 시간을 모두 입력해주세요.");
      return;
    }

    navigation.navigate("Page2");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <TitleBar text="다음 시계를 보고 서로 맞는 시간을 연결하세요." />

        {/* 시계 2개 */}
        <View style={styles.clockRow}>
          <TouchableOpacity onPress={() => setSelectedClock("left")}>
            <Image
              source={require("../assets/clock1.png")}
              style={[
                styles.clockImage,
                selectedClock === "left" && styles.selectedClock,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedClock("right")}>
            <Image
              source={require("../assets/clock2.png")}
              style={[
                styles.clockImage,
                selectedClock === "right" && styles.selectedClock,
              ]}
            />
          </TouchableOpacity>
        </View>

        {/* 정답 버튼 */}
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.option} onPress={() => selectAnswer("5:00")}>
            <Text style={styles.optionText}>5:00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => selectAnswer("10:00")}>
            <Text style={styles.optionText}>10:00</Text>
          </TouchableOpacity>
        </View>

        {/*      현재 시간 입력      */}        
        <View style={styles.inputBox}>
          <View style={styles.inputTitleRow}>
            <View style={styles.playIcon} />
            <Text style={styles.inputTitle}>현재 시간을 적거나 말해보세요.</Text>
          </View>

          <View style={styles.timeRow}>
            <Text style={styles.timeLabel}>현재 시간은?</Text>

            <TextInput
              style={styles.timeInput}
              keyboardType="numeric"
              maxLength={2}
              value={hour}
              onChangeText={setHour}
            />
            <Text style={styles.timeUnit}>시</Text>

            <TextInput
              style={styles.timeInput}
              keyboardType="numeric"
              maxLength={2}
              value={minute}
              onChangeText={setMinute}
            />
            <Text style={styles.timeUnit}>분</Text>
          </View>
        </View>

        {/* 다음 버튼 */}
        <View style={styles.nextButtonWrapper}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>다음</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, paddingHorizontal: 20 },

  clockRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  clockImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 10,
  },
  selectedClock: {
    borderColor: "#0E788C",
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 30,
  },

  option: {
    backgroundColor: "#eeeeee",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "600",
  },

  // ========== 현재 시간 입력 박스 ==========
  inputBox: {
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    padding: 15,
  },
  inputTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  playIcon: {
    width: 18,
    height: 18,
    backgroundColor: "#0E788C",
    borderRadius: 4,
    marginRight: 8,
  },
  inputTitle: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  timeLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  timeInput: {
    width: 50,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginHorizontal: 5,
    fontSize: 18,
    textAlign: "center",
  },
  timeUnit: {
    fontSize: 16,
    marginRight: 10,
  },

  // 다음 버튼
  nextButtonWrapper: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  nextButton: {
    backgroundColor: "#0E788C",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

