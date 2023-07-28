
import {Car} from "./car.interface";
import {CarType} from "../enums/cartype.enum";

export interface ParkingLot {
  type: CarType;
  car: Car | null;
}
