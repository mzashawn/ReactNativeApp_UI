import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";

const NextHeroText = () => {
  const pressHandler = () => {
    Alert.alert("Read Bible", "Increase you faith", [
      {
        text: "Buy from us",
        onPress: () => console.log("At a very low price"),
      },
      {
        text: "Donate!",
        onPress: () => console.log("See our official website"),
      },
    ]);
  };
  return (
    <>
      <View>
        <TouchableOpacity activeOpacity={0.4} onPress={pressHandler}>
          <Text style={styles.headerText1}>Holy Bible</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NextHeroText;

const styles = StyleSheet.create({
  headerText: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 20,
    elevation: 1,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
    padding: 10,
    fontWeight: "bold",
    marginTop: -50,
  },
  headerText1: {
    shadowColor: "#ff4",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 20,
    elevation: 1,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
    padding: 10,
    fontWeight: "bold",
    marginTop: 30,
  },
});
