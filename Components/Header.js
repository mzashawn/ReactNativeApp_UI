import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import CompoImage from "./CompoImage";
const Header = () => {
  return (
    <ScrollView style={styles.imageSourceStyle} horizontal={false}>
      <View style={styles.header}>
        <Image source={require("../Images/Cart.png")} style={styles.logo} />
        <Text style={styles.title}>LCO Shopping Cart</Text>
      </View>
      <View>
        <CompoImage imageSource={require("../Images/Laptop.jpg")} />
        <CompoImage imageSource={require("../Images/City.jpg")} />
        <CompoImage imageSource={require("../Images/Loneliness.jpg")} />
        <CompoImage imageSource={require("../Images/Kettle.jpg")} />
        <CompoImage imageSource={require("../Images/Tower.jpg")} />
      </View>
    </ScrollView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomWidth: 4,
    width: Dimensions.get("window").width,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },

  // bgContent: {
  //   width: Dimensions.get("window").height,
  //   height: Dimensions.get("screen").width,
  //   marginTop: 620,
  // },
  imageSourceStyle: {
    padding: 15,
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "itaclic",
  },
});
