import { ItemRow } from "@/components/ItemRow";
import { colors } from "../values/colors.js";
import { numbers } from "../values/numbers.js";
import { Text, View, StyleSheet } from "react-native";
import { Item } from "@/types/Item";

interface CardProps {
    items: Item[];
    title: string;
    keyCategories: string[];
}

export function Card({ items, title, keyCategories }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <ItemRow key={index} item={item} keyCategories={keyCategories}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 380,
    backgroundColor: colors.dark1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    color: colors.darkgray,
    fontSize: numbers.textsm,
  },
  itemsContainer: {
    gap: 20,
  },
});
