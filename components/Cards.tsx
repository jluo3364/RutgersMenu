//import necessary libraries/components
import { ScrollView, StyleSheet } from "react-native";
import { Card } from "@/components/Card";
import { MenuSection } from "@/types/MenuSection";

interface CardsProps {
    sections: MenuSection[];
    keyCategories: string[];
}

export function Cards( {sections, keyCategories}: CardsProps ) {
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
        <Card key={index} items={section.items} title={section.name} keyCategories={keyCategories} />
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
