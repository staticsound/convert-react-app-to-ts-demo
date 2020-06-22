import React from "react";
import {fetchNutritionInfo} from "../USDA-API/API-caller";
import FoodItem from "../components/FoodItem";
import FoodModel from "../models/FoodModel";

const Home: React.FC = () => {
  const [items, setItems] = React.useState<FoodModel[]>([]);

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
        items.map(item => <FoodItem item={item}/>)
      }
    </div>
  </div>;
};

export default Home;


