import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { Component } from "react";
import CompoImage from "./CompoImage";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Body extends Component {
  render() {
    const companyName = "OSHNI SOFTWARE";
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.column1}>
            <CompoImage imageSource={require("../Images/City.jpg")} />
          </View>
          <View style={styles.column2}>
            <CompoImage imageSource={require("../Images/Devices.jpg")} />
          </View>
          <View style={styles.full}>
            <CompoImage imageSource={require("../Images/ClassicCars.jpg")} />
          </View>

          {/* //more Hero Images */}
          <View style={styles.full}>
            <CompoImage imageSource={require("../Images/Onion.jpg")} />
          </View>
          <View style={styles.column1}>
            <CompoImage imageSource={require("../Images/Windmil.jpg")} />
          </View>
          <View style={styles.column2}>
            <CompoImage imageSource={require("../Images/Laptop.jpg")} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.column1}>
            <CompoImage imageSource={require("../Images/City.jpg")} />
          </View>
          <View style={styles.column2}>
            <CompoImage imageSource={require("../Images/Devices.jpg")} />
          </View>
          <View style={styles.full}>
            <CompoImage imageSource={require("../Images/ClassicCars.jpg")} />
          </View>

          <TouchableOpacity
            onPress={() =>
              console.log("You Clicked The company Name " + companyName)
            }
            style={{
              // backgroundColor: "maroon",
              // width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 30,
                  color: "#23C4ED",
                  textAlign: "center",
                  marginLeft: 60,
                }}
              >
                {companyName}
              </Text>
            </View>
          </TouchableOpacity>
          {/* //more Hero Images */}
          <View style={styles.full}>
            <CompoImage imageSource={require("../Images/Onion.jpg")} />
          </View>
          <View style={styles.column1}>
            <CompoImage imageSource={require("../Images/Windmil.jpg")} />
          </View>
          <View style={styles.column2}>
            <CompoImage imageSource={require("../Images/Laptop.jpg")} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 5,
    backgroundColor: "#12B0E8",
    marginTop: 5,
  },

  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  full: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
