import React from "react";
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';
import {queryNutritionInfo} from "../USDA-API/API-caller";
import FoodItem from "../components/FoodItem";
import FoodModel from "../models/FoodModel";

const Search: React.FC = () => {
  const [items, setItems] = React.useState<FoodModel[]>([]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    queryFoods('burger')
  }, []);

  const queryFoods = (q: string) => {
    queryNutritionInfo(q)
    .then((items) => {
      setItems(items);
    })
  };

  return (
      <div className="container">
        <div className="row">
          <InputGroup>
            <InputGroupText>
              <Input onChange={e => setQuery(e.target.value)} placeholder="Search Here..."/>
            </InputGroupText>
            <Button outline color="primary" onClick={() => queryFoods(query)}>Find Foods</Button>
          </InputGroup>
        </div>
        <div className="row">
          {
            items.map(item => <FoodItem item={item}/>)
          }
        </div>
      </div>
  );
};

export default Search;


