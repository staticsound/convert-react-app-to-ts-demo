import config from "../config";
import axios from "axios";
import Food from "./Food";
import FoodNutrient from "./FoodNutrient";
import Page from "./Page";
import DetailedFoodNutrient from "./DetailedFoodNutrient";
import FoodMapper from "../models/FoodMapper";
import FoodModel from "../models/FoodModel";

const defaultParams = {
  format: "json",
  api_key: config.usdaAPIKey
};


export const fetchNutritionInfo = async ():Promise<FoodModel[]> => {
  const params = {
    ...defaultParams,
    lt: "f",
    sort: "n"
  };

  try {
    const{data} = await axios.get<Food<FoodNutrient>[]>(config.usdaAPIUrl + '/foods/list', {params});
    return data.map(FoodMapper.fromFoodWithFoodNutrient);
  } catch(e) {
    throw e.response.data;
  }
};

interface FoodSearchResponse extends Page{
  foods: Food<DetailedFoodNutrient>[];
}

export const queryNutritionInfo = async (query: string):Promise<FoodModel[]> => {

  let body = {
    query,
    dataType: [
    "Foundation",
    "SR Legacy"
    ],
    pageSize: 25, //TODO: make this a dropdown option
    sortBy: "dataType.keyword", //TODO: make this a dropdown option
    sortOrder: "asc", //TODO: make this a dropdown option
  };

  try {
    const{data} = await axios.post<FoodSearchResponse>(config.usdaAPIUrl + '/foods/search', body, {params: defaultParams});
    return data.foods.map(FoodMapper.fromFoodWithDetailedFoodNutrient);
  } catch(e) {
    throw e.response.data;
  }
};