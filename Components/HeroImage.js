import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";
import React from "react";
import HeroText from "./HeroText";
import NextHeroText from "./NextHeroText";
import NewHeroText from "./NewHeroText";

const HeroImage = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <Button
          title="Navigate to Body Component"
          onPress={() => navigation.navigate("Body")}
          color="red"
        />
        <ImageBackground
          source={require("../Images/Macbook.jpg")}
          style={styles.hero}
        >
          <HeroText />
        </ImageBackground>

        <ImageBackground
          source={require("../Images/Bible.jpg")}
          style={styles.hero}
        >
          <NextHeroText />
        </ImageBackground>

        <ImageBackground
          source={require("../Images/Kettle.jpg")}
          style={styles.hero}
        >
          <NewHeroText />
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default HeroImage;

const styles = StyleSheet.create({
  hero: {
    marginTop: 10,
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
