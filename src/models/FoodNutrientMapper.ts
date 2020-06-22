import FoodNutrient from "../USDA-API/FoodNutrient";
import FoodNutrientModel from "./FoodNutrientModel";
import DetailedFoodNutrient from "../USDA-API/DetailedFoodNutrient";

const fromFoodNutrient = (dto: FoodNutrient):FoodNutrientModel => {
  const {
    number,
    name,
    amount,
    unitName
  } = dto;
  return {
    number,
    name,
    amount,
    unitName
  } as FoodNutrientModel;
};

const fromDetailedFoodNutrient = (dto: DetailedFoodNutrient):FoodNutrientModel => {
  const {
    nutrientNumber,
    nutrientName,
    value,
    unitName
  } = dto;
  return {
    number: nutrientNumber,
    name: nutrientName,
    amount: value,
    unitName
  } as FoodNutrientModel;
};

export default {
  fromFoodNutrient,
  fromDetailedFoodNutrient
}