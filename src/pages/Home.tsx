import React from "react";
import {fetchNutritionInfo} from "../USDA-API/API-caller";
import FoodNutrient from "../USDA-API/FoodNutrient";
import Food from "../USDA-API/Food";
import UsdaItem from "../components/FoodItem";

const Home: React.FC = () => {
  const [items, setItems] = React.useState<Food<FoodNutrient>[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        setItems(await fetchNutritionInfo());
      } catch (error) {
        // show error message
      }
    })()
  }, []);

  return <div className="container">
    <div className="row">
      {
        items.map(item => <UsdaItem item={item}/>)
      }
    </div>
  </div>;
};

export default Home;


