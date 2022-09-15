import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const New = () => {
  return (
    <View style={styles.newContainer}>
      <Text style={{ fontFamily: "Indie", fontSize: 22, color: "lime" }}>
        How to use custom fonts via Expo in 2022
      </Text>
      <Text
        style={{
          fontFamily: "Abril",
          fontSize: 15,
          color: "white",
          marginTop: 50,
        }}
      >
        Add this condition to load the fonts "if (!fontsLoaded) return null"
      </Text>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  newContainer: {
    marginTop: 60,
    // backgroundColor: "dodgerblue",
  },
});
