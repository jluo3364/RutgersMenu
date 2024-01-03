import ItemRow from "./ItemRow";
import { colors } from "../values/colors.js";
import { numbers } from "../values/numbers.js";
import { Text, View, StyleSheet } from "react-native";

export default function Card({ items, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <ItemRow key={index} item={item} />
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
