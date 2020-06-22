import React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import Style from './FoodItem.module.scss';
import FoodModel from "../models/FoodModel";

interface FoodItem {
  item: FoodModel
}

const FoodItem:React.FC<FoodItem> = ({item}) => {
  return (
      <div key={item.fdcId} className={Style.spacing}>
        <Card className={Style.fixedSize}>
          <CardBody>
            <CardTitle>
              {item.description}
            </CardTitle>
            <CardText>
              {item.foodNutrients?.map((nutrients) => (
                <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}{nutrients.unitName?.toLowerCase()}</div>
            ))}
            </CardText>
          </CardBody>
        </Card>
      </div>
  )
};

export default FoodItem;