import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const NewHeroText = () => {
  const product = "A Tea Kettle";

  return (
    <>
      <View>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => alert("Click here to see the Price!")}
        >
          <Text style={styles.headerText}>{product} </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewHeroText;

const styles = StyleSheet.create({
  headerText: {
    shadowColor: "red",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    elevation: 1,
    alignSelf: "center",
    fontSize: 36,
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
    marginTop: 30,
  },
});
