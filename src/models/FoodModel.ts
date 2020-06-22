import {LocalDate} from "js-joda";
import FoodNutrientModel from "./FoodNutrientModel";

export default interface FoodModel {
  fdcId: number;
  description: string;
  dataType: string;
  publicationDate: LocalDate;
  foodCode: string;
  ndbNumber: string;
  foodNutrients: FoodNutrientModel[];
}
