import { StyleSheet, Text, View } from "react-native";
export default function NutritionFactsSection({ nutritionFacts }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Nutrition Facts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 290,
    rowGap: 6,
  },
});
