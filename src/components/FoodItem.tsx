import React, {PropsWithChildren} from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import Food from "../USDA-API/Food";
import Style from './FoodItem.module.scss';

interface FoodItem<T> {
  item: Food<T>
}

const FoodItem = <T, >({item}: PropsWithChildren<FoodItem<T>>) => {
  // For search: <div key={nutrients.nutrientId}>{nutrients.nutrientName}: {nutrients.value} {nutrients.unitName.toLowerCase()}</div>
  return (
      <div key={item.fdcId} className={Style.spacing}>
        <Card className={Style.fixedSize}>
          <CardBody>
            <CardTitle>
              {item.description}
            </CardTitle>
            <CardText>
              {/*{item.foodNutrients.map((nutrients) => (*/}
              {/*    <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}</div>*/}
              {/*))}*/}
            </CardText>
          </CardBody>
        </Card>
      </div>
  )
};

export default FoodItem;