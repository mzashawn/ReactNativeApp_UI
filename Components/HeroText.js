import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";

const HeroText = () => {
  return (
    <>
      <View>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() =>
            Alert.alert(
              "Macbook Air is available in our outlets",
              "Macbook - 2022",
              [
                {
                  text: "Add to cart",
                  onPress: () => console.log("So, you would like to buy it!"),
                },
                {
                  text: "Ask me later",
                  onPress: () =>
                    console.log("Installment facilities available for you!"),
                },
              ]
            )
          }
        >
          <Text style={styles.headerText}>Macbook Air 2022</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeroText;

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
    // marginTop: -50,
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
  },
});
