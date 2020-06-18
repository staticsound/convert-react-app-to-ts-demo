import React from "react";
import {fetchNutritionInfo} from "../components/USDA-API/API-caller";

import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import Cards from "../styles/Cards.module.scss";
import FoodNutrient from "../components/USDA-API/FoodNutrient";
import Food from "../components/USDA-API/Food";

const Home: React.FC = () => {
  const [items, setItems] = React.useState<Food<FoodNutrient>[]>([]);

  React.useEffect(() => {
    fetchNutritionInfo()
    .then((items) => {
      setItems(items);
    })
  }, []);

  const usdaItems = items.map((item) => (
      <div key={item.fdcId} className={Cards.spacing}>
        <Card className={Cards.fixedSize}>
          <CardBody>
            <CardTitle>
              {item.description}
            </CardTitle>
            <CardText>
              {item.foodNutrients.map((nutrients) => (
                  <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}</div>
              ))}
            </CardText>
          </CardBody>
        </Card>
      </div>
  ));

  return <div className="container">
    <div className="row">{usdaItems}</div>
  </div>;
};

export default Home;


