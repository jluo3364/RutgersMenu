import { StatusBar } from "expo-status-bar";
import { StrictMode, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OptionsBar from "./components/OptionsBar";
import { colors } from "./values/colors.js";
import ItemRow from "./components/ItemRow.js";
import Cards from "./components/Cards.js";

export default function App() {
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
        <View style={styles.optionsContainer}>
          <OptionsBar />
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
    rowGap: 15,
  },
  cardsContainer: {
    width: 380,
    flex: 7,
    paddingTop: 30,
    justifyContent: "flex-start",
  },
  optionsContainer: {
    width: 380,
    flex: 1,
    alignContent: "flex-end",
  },
});
