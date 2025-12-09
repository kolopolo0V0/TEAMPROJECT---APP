import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page3({ navigation }) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  const checkAnswer = () => {
    const correct1 = ["치약", "칫솔"];
    const correct2 = ["컵", "젓가락"];

    const words1 = answer1.trim().split(" ");
    const words2 = answer2.trim().split(" ");

    const isCorrect1 = words1.some(w => correct1.includes(w));
    const isCorrect2 = words2.some(w => correct2.includes(w));

    if (isCorrect1 && isCorrect2) {
      Alert.alert("정답입니다!", "다음 페이지로 이동합니다.");
      navigation.navigate("Memory1");
    } else {
      Alert.alert("오답입니다", "다시 시도해보세요!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

 
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>아래 그림을 보고 질문에 답해 보세요.</Text>
      </View>


      <View style={styles.imageBox}>

 
        <View style={styles.row}>
          <Image source={require("../assets/dumbbell.png")} style={styles.img} />
          <Image source={require("../assets/toothpaste.png")} style={styles.img} />
          <Image source={require("../assets/totebag.png")} style={styles.img} />
        </View>

   
        <View style={styles.row}>
          <Image source={require("../assets/ladle.png")} style={styles.img} />
          <Image source={require("../assets/toothbrush.png")} style={styles.img} />
          <Image source={require("../assets/scrubber.png")} style={styles.img} />
        </View>

  
        <View style={styles.row}>
          <Image source={require("../assets/cup.png")} style={styles.img} />
          <Image source={require("../assets/chopsticks.png")} style={styles.img} />
          <View style={styles.empty} />
        </View>

      </View>

   
      <Text style={styles.number}>1</Text>
      <Text style={styles.question}>위 그림에서 양치를 할 때 필요한 물건을 골라 말해보세요.</Text>
      <TextInput
        style={styles.input}
        placeholder="예: 치실"
        value={answer1}
        onChangeText={setAnswer1}
      />

   
      <Text style={styles.number}>2</Text>
      <Text style={styles.question}>위 그림에서 식사를 할 때 필요한 물건을 골라 말해보세요.</Text>
      <TextInput
        style={styles.input}
        placeholder="예: 집개"
        value={answer2}
        onChangeText={setAnswer2}
      />

  
      <Pressable style={styles.nextBtn} onPress={checkAnswer}>
        <Text style={styles.nextBtnText}>정답 확인</Text>
      </Pressable>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10,
  },

  titleBar: {
    width: "100%",
    backgroundColor: "#567586",
    paddingVertical: 10,
    paddingLeft: 25,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  titleText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  imageBox: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginBottom: 15,
  },

  img: {
    width: 90,
    height: 90,
  },

  empty: {
    width: 90,
    height: 90,
    opacity: 0,
  },

  number: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    alignSelf: "flex-start",
  },

  question: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#aaa",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
    width: "90%",
  },

  nextBtn: {
    backgroundColor: "#567586",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  nextBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

