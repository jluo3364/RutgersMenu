import { StatusBar, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Cards } from "@/components/Cards";
import { Item } from "@/types/Item";
import { colors } from "@/values/colors";
import { MenuSection } from "@/types/MenuSection";
import { OptionSection } from "@/components/OptionSection";
 
export default function Index() {
  const item1: Item = {
    name: "chicken",
    nutritionFacts: [
      { label: "calories", value: 145, unit: "kcal", bold: false },
      { label: "fat", value: 5, unit: "g", bold: true },
      { label: "carbs", value: 5, unit: "g", bold: true },
      { label: "protein", value: 20, unit: "g", bold: true },
    ],
    ingredients: ["chicken", "salt", "pepper"],
  };

  const item2: Item = {
    name: "salad",
    nutritionFacts: [
      { label: "calories", value: 50, unit: "kcal", bold: false },
      { label: "fat", value: 1, unit: "g", bold: true },
      { label: "carbs", value: 10, unit: "g", bold: true },
      { label: "protein", value: 0, unit: "g", bold: true },
    ],
    ingredients: ["lettuce", "tomato", "cucumber"],
  };

  const item3: Item = {
    name: "steak",
    nutritionFacts: [
      { label: "calories", value: 200, unit: "kcal", bold: false },
      { label: "fat", value: 20, unit: "g", bold: true },
      { label: "carbs", value: 5, unit: "g", bold: true },
      { label: "protein", value: 25, unit: "g", bold: true },
    ],
    ingredients: ["steak", "salt", "pepper"],
  };

  const item4: Item = {
    name: "fries",
    nutritionFacts: [
      { label: "calories", value: 200, unit: "kcal", bold: false },
      { label: "fat", value: 15, unit: "g", bold: true },
      { label: "carbs", value: 30, unit: "g", bold: true },
      { label: "protein", value: 5, unit: "g", bold: true },
    ],
    ingredients: ["potato", "salt", "pepper"],
  };

  const section1: MenuSection = {
    name: "entrees",
    items: [item1, item3],
  };
  

  const section2: MenuSection = {
    name: "sides",
    items: [item2 ,item4],
  };

  return (
    <View
      style={styles.container}
    >
      <ThemedView style={styles.cardsContainer}>
        <Cards sections={[section1, section2]} keyCategories={["calories", "protein"]}/>
      </ThemedView>
      <View style={styles.optionsContainer}>
        <OptionSection />
      </View>
      <StatusBar />
    </View>
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
    flex: 5,
    paddingTop: 35,
    justifyContent: "flex-start",
  },
  optionsContainer: {
    width: 380,
    flex: 1,
    alignContent: "flex-end",
  },
});
