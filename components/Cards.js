//import necessary libraries/components
import { ScrollView, StyleSheet } from "react-native";
import Card from "./Card.js";

export default function Cards({ sections }) {
  /*sections has the following format:
    {
        {
            name:"entrees",
            items:[
                {name:"chicken"},
                {name:"salmon"},
                {name:"steak"},
                {name:"tofu"},
            ],
        },
        {
            name:"sides",
            items:[
                {name:"rice"},
                {name:"mashed potatoes"},
                {name:"fries"},
                {name:"salad"},
            ],
        },
    }
    */
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.cardsContainer}
    >
      {sections.map((section, index) => (
        <Card key={index} items={section.items} title={section.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "column",
    alignContent: "center",
  },
});
