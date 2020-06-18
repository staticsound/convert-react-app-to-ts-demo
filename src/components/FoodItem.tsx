import React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import Food from "../USDA-API/Food";
import Style from './FoodItem.module.scss';
import FoodNutrient from "../USDA-API/FoodNutrient";

interface FoodItem {
  item: Food<FoodNutrient>
}

const FoodItem = ({item}: FoodItem) => {

  return (
      <div key={item.fdcId} className={Style.spacing}>
        <Card className={Style.fixedSize}>
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
  )
};

export default FoodItem;