import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { NutritionFact} from '@/types/NutritionFact';
import { colors } from "@/values/colors.js";
import { numbers } from "@/values/numbers.js";

// Define the type for the props
interface NutritionSectionProps {
  nutritionFacts: NutritionFact[];
}

export function NutritionSection({ nutritionFacts }: NutritionSectionProps) {
    const renderNutritionFacts = (nutritionFacts: NutritionFact[]) => {
        //TODO: calories and serving size display differently
        //TODO: modify units depending on nutrition facts
        return (
          <Text style={styles.rowText} >
            {nutritionFacts.map((fact) => (
              <Text key={fact.label} style={{ fontWeight: fact.bold ? 'bold' : 'normal' }}>
                {fact.value} {fact.unit} {fact.label}
              </Text>
            ))}
          </Text>
        );
      };
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
  rowText: {
    color: colors.midgray,
    fontSize: numbers.textsm,
  },
});