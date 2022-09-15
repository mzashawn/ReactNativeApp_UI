import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import New from "./compo/New";

export default function App() {
  const [fontsLoaded] = useFonts({
    // "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    Indie: require("./assets/fonts/IndieFlower-Regular.ttf"),
    Dancing: require("./assets/fonts/DancingScript-Regular.ttf"),
    Abril: require("./assets/fonts/AbrilFatface-Regular.ttf"),
    Betta: require("./assets/fonts/bettawork-bettawork-400.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Betta", fontSize: 38, color: "maroon" }}>
        Adding Custom Google Fonts in this lesson
      </Text>
      <StatusBar style="auto" backgroundColor="lightgreen" />

      <New />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
