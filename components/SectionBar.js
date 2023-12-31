import { StyleSheet, FlatList, Pressable, Text } from "react-native";

export default function SectionBar({ children, selectedSection }) {
  const item = ({ item, onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <Text style={styles.item}>{item}</Text>
      </Pressable>
    );
  };

  const [selectedItem, setSelectedItem] = useState(selectedSection);

  const renderItem = ({ item }) => {
    const color = item === selectedItem ? "#EBEBEF" : "#A9A9BC";

    return <Item item={item} onPress={() => setSelectedItem(item)} />;
  };

  return (
    <View style={style.listContainer}>
      {
        <FlatList
          data={children}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  item: {
    color: "#A9A9BC",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "16px",
    wordWrap: "break-word",
  },
});
