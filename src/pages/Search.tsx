import React from "react";
import {
  Button, Card, CardBody, CardText, CardTitle, Input, InputGroup,
  InputGroupText
} from 'reactstrap';
import Cards from '../styles/Cards.module.scss';
import {queryNutritionInfo} from "../components/USDA-API/API-caller";
import Food from "../components/USDA-API/Food";
import DetailedFoodNutrient from "../components/USDA-API/DetailedFoodNutrient";

const Search: React.FC = () => {
  const [items, setItems] = React.useState<Food<DetailedFoodNutrient>[]>([]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    queryFoods('burger')
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
                  <div
                      key={nutrients.nutrientId}>{nutrients.nutrientName}: {nutrients.value} {nutrients.unitName.toLowerCase()}</div>
              ))}
            </CardText>
          </CardBody>
        </Card>
      </div>
  ));

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
        <div className="row">{usdaItems}</div>
      </div>
  );
};

export default Search;


