import SectionBar from "./SectionBar";
import { StyleSheet, View } from "react-native";
import DatePicker from "./DatePicker";

export default function OptionsBar() {
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
  let defaultLocation = "Busch";
  return (
    <View style={styles.container}>
      <SectionBar selectedSection="entrees">
        {[
          "entrees",
          "specials",
          "mongolian grill",
          "desserts",
          "pizza",
          "salad",
        ]}
      </SectionBar>
      <View style={styles.row2}>
        <SectionBar selectedSection={currentMeal}>
          {["breakfast", "lunch", "dinner"]}
        </SectionBar>
        <DatePicker />
      </View>

      <SectionBar selectedSection={defaultLocation} row="locations">
        {["Busch", "Livingston", "Neilson"]}
      </SectionBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
