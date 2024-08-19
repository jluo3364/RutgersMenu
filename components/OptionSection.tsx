import { OptionBar } from "@/components/OptionBar";
import { StyleSheet, View } from "react-native";
import { DatePicker } from "@/components/DatePicker";

export function OptionSection() {
  const currentMeal = () => {
    const hour = new Date().getHours();
    if (hour < 11) {
      return "breakfast";
    } else if (hour <= 11 || hour < 16) {
      return "lunch";
    } else {
      return "dinner";
    }
  };
  const defaultLocation = "busch";
  const defaultSection = "entrees";
  const defaultMeal = currentMeal();
  const locationOptions = ["busch", "livingston", "neilson"];
  const menuSectionOptions = ["entrees", "sides", "desserts"];
  const mealOptions = ["breakfast", "lunch", "dinner"];
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <OptionBar defaultOption="entrees" options = {menuSectionOptions} barName="menuSection"/>
      </View>
      <View style={styles.item}>
        <View style={styles.row2}>
          <OptionBar defaultOption={defaultMeal} options={mealOptions} barName="meal"/>
          <DatePicker />
        </View>
      </View>
      <View style={styles.item}>
        <OptionBar defaultOption={defaultLocation} options={locationOptions} barName="location"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
  item: {
    flex: 1,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
