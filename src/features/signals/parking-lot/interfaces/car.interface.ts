import {CarType} from "../enums/cartype.enum";


export interface Car {
  id: number;
  name: string;
  color: string;
  type: CarType;
}
