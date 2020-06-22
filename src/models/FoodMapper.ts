import Food from "../USDA-API/Food";
import FoodNutrient from "../USDA-API/FoodNutrient";
import FoodModel from "./FoodModel";
import FoodNutrientMapper from "./FoodNutrientMapper";
import DetailedFoodNutrient from "../USDA-API/DetailedFoodNutrient";

const fromFoodWithFoodNutrient = (dto: Food<FoodNutrient>):FoodModel => {
  const {
    fdcId,
    description,
    dataType,
    publicationDate,
    foodCode,
    ndbNumber,
    foodNutrients
  } = dto;
  return {
    fdcId,
    description,
    dataType,
    publicationDate,
    foodCode,
    ndbNumber,
    foodNutrients: foodNutrients?.map(FoodNutrientMapper.fromFoodNutrient)
  } as FoodModel;
};

const fromFoodWithDetailedFoodNutrient = (dto: Food<DetailedFoodNutrient>):FoodModel => {
  const {
    fdcId,
    description,
    dataType,
    publicationDate,
    foodCode,
    ndbNumber,
    foodNutrients
  } = dto;
  return {
    fdcId,
    description,
    dataType,
    publicationDate,
    foodCode,
    ndbNumber,
    foodNutrients: foodNutrients?.map(FoodNutrientMapper.fromDetailedFoodNutrient)
  } as FoodModel;
};

export default {
  fromFoodWithFoodNutrient,
  fromFoodWithDetailedFoodNutrient
}

