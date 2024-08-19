import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "@/values/colors.js";
import { useState } from "react";
import { numbers } from "@/values/numbers.js";
import { NutritionSection } from "@/components/NutritionSection";
import { Item } from "@/types/Item";
import { NutritionFact } from "@/types/NutritionFact";

// Define the type for the props
interface ItemRowProps {
    item: Item;
    keyCategories: string[]; // label of key details -- serving size, calories, macros
  }

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function ItemRow({ item, keyCategories }: ItemRowProps) {
  const getKeyFacts = (): NutritionFact[] => {
    let keyFacts: NutritionFact[] = []; //@TODO: get key facts from nutritionFacts
    keyCategories.forEach((category) => {
      item.nutritionFacts.forEach((fact) => {
        if (category === fact.label) {
          keyFacts.push({ label: category, value: fact.value, bold: fact.bold, unit: fact.unit });
        }
      });
    });
    
      return keyFacts;
  };
  const [carrot, setCarrot] = useState(false);
  const expand = () => {
    setCarrot(!carrot);
  };
  
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.factsContainer}>
          {getKeyFacts().map((fact, index) => (
            <View key={index}>
              <Text style={styles.rowText}>
                {fact.value} {fact.unit} {fact.label}
              </Text>
            </View>
          ))}
        </View>
        <Pressable hitSlop={20} onPress={expand}>
          {carrot ? (
            <Image
              source={require("../assets/images/carrot-down.png")}
              style={styles.carrotDownIcon}
            />
          ) : (
            <Image
              source={require("../assets/images/carrot-side.png")}
              style={styles.carrotSideIcon}
            />
          )}
        </Pressable>
      </View>
      {carrot && <NutritionSection nutritionFacts={item.nutritionFacts} ></NutritionSection>}
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
