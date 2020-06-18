import {LocalDate} from "js-joda";

export default interface Food<T> {
  fdcId: number;
  description: string;
  dataType: string;
  publicationDate: LocalDate;
  foodCode: string;
  ndbNumber: string;
  foodNutrients: T[];
}


