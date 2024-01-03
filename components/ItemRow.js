import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../values/colors.js";
import { useState } from "react";
import { numbers } from "../values/numbers.js";
import NutritionFactsSection from "./NutritionFactsSection.js";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default function ItemRow({ item, categories }) {
  const getKeyFacts = () => {
    let keyFacts = [];
    // categories.forEach((category) => {
    //   item.nutritionFacts.forEach((fact) => {
    //     if (category === fact.type) {
    //       keyFacts.push({ category: category, value: fact.value });
    //     }
    //   });
    // });
    keyFacts = [
      { category: "protein", value: randomInt(10, 20) },
      { category: "carbs", value: 5 },
      { category: "fat", value: randomInt(1, 15) },
      { category: "sodium", value: randomInt(5, 500) },
      { category: "fiber", value: 2 },
    ];
    return keyFacts;
  };
  const [carrot, setCarrot] = useState(false);
  const expand = () => {
    setCarrot(!carrot);
  };
  const renderItem = ({ item }) => {
    //TODO: calories and serving size display differently
    //TODO: modify units depending on nutrition facts
    return (
      <Text style={styles.rowText}>
        {item.value}g {item.category}
      </Text>
    );
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.factsContainer}>
          {getKeyFacts().map((fact, index) => (
            <View key={index}>
              <Text style={styles.rowText}>
                {fact.value}g {fact.category}
              </Text>
            </View>
          ))}
        </View>
        <Pressable hitSlop={20} onPress={expand}>
          {carrot ? (
            <Image
              source={require("../assets/carrot-down.png")}
              style={styles.carrotDownIcon}
            />
          ) : (
            <Image
              source={require("../assets/carrot-side.png")}
              style={styles.carrotSideIcon}
            />
          )}
        </Pressable>
      </View>
      {carrot && <NutritionFactsSection></NutritionFactsSection>}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 340,
  },
  name: {
    color: colors.lightest,
    fontSize: numbers.textmd,
  },
  rowText: {
    color: colors.midgray,
    fontSize: numbers.textsm,
  },
  factsContainer: {
    flexDirection: "row",
    width: 315,
    rowGap: 2,
    columnGap: 7,
    flexWrap: "wrap",
  },
  detailContainer: {
    flexDirection: "row",
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  carrotSideIcon: {
    width: 9,
    height: 17,
  },
  carrotDownIcon: {
    width: 17,
    height: 9,
  },
});
