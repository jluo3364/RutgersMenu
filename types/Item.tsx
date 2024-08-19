import { NutritionFact } from "@/types/NutritionFact";

export interface Item {
    name: string;
    nutritionFacts: NutritionFact[]; // list of macros (each with a list of facts) + calories + serving size
    ingredients: string[];
}