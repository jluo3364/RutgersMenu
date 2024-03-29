import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { useState } from "react";
import { colors } from "../values/colors.js";
import { numbers } from "../values/numbers.js";

export default function SectionBar({ children, selectedSection, row }) {
  const location = row === "locations";
  const Item = ({ item, onPress }) => {
    const color = item === selectedItem ? colors.lightest : colors.darkgray;

    const textsize = location ? numbers.textlg : numbers.textmd;
    return (
      <Pressable onPress={onPress}>
        <Text style={[styles.item, { color: color }, { fontSize: textsize }]}>
          {item}
        </Text>
      </Pressable>
    );
  };

  const [selectedItem, setSelectedItem] = useState(selectedSection);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedItem(item)} />;
  };

  return (
    <FlatList
      data={children}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={
        location ? styles.locationBar : styles.rowContainer
      }
    />
  );
}

const styles = StyleSheet.create({
  rowContainer: {},
  item: {
    fontSize: numbers.textmd,
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  locationBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
