import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { StyleSheet, Text, View } from "react-native";
import OptionsBar from "./components/OptionsBar";
import { colors } from "./values/colors.js";
import ItemRow from "./components/ItemRow.js";
import Card from "./components/Card.js";
import Cards from "./components/Cards.js";

export default function App() {
  const currentMeal = () => {
    const hour = new Date().getHours();
    if (hour < 11) {
      return "Breakfast";
    } else if (hour <= 11 || hour < 16) {
      return "Lunch";
    } else {
      return "Dinner";
    }
  };
  let defaultLocation = "Busch";
  const items = [
    { name: "chicken" },
    { name: "salmon" },
    { name: "steak" },
    { name: "tofu" },
  ];
  return (
    <StrictMode>
      <View style={styles.container}>
        <View style={styles.optionsContainer}>
          <OptionsBar />
        </View>
        <View style={styles.cardsContainer}>
          <Cards
            sections={[
              {
                name: "entrees",
                items: [
                  { name: "chicken" },
                  { name: "salmon" },
                  { name: "steak" },
                  { name: "tofu" },
                ],
              },
              {
                name: "sides",
                items: [
                  { name: "rice" },
                  { name: "mashed potatoes" },
                  { name: "fries" },
                  { name: "salad" },
                ],
              },
            ]}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  optionsContainer: {
    width: 360,
    height: 160,
  },
  cardsContainer: {
    width: 360,
    paddingVertical: 15,
    gap: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "scroll",
  },
});
