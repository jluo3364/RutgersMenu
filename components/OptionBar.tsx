import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { useState } from "react";
import { colors } from "../values/colors.js";
import { numbers } from "../values/numbers.js";

interface OptionBarProps {
  options: string[];
  defaultOption: string;
  barName: string;
}

export function OptionBar({ options, defaultOption, barName }: OptionBarProps) {
  const isLocationBar: boolean = barName === "location";
  const [selectedOption, setselectedOption] = useState(defaultOption);

  const Option = ({ option, onPress }: { option: string; onPress: () => void }) => {
    const color = option === selectedOption ? colors.lightest : colors.darkgray;
    const bolded = option === selectedOption ? "bold" : "normal";
    const textsize = isLocationBar ? numbers.textlg : numbers.textmd;

    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <Text style={[styles.option, { color: color }, { fontSize: textsize }, {fontWeight: bolded}]}>
          {option}
        </Text>
      </Pressable>
    );
  };

  const renderItem = ({ item }: {item: string}) => {
    return <Option option={item} onPress={() => setselectedOption(item)} />;
  };

  return (
    <FlatList
      data={options}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={
        isLocationBar ? styles.locationBar : styles.rowContainer
      }
    />
  );
}

const styles = StyleSheet.create({
  rowContainer: {},
  option: {
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
