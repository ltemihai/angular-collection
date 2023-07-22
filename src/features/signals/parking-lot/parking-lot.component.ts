import {ChangeDetectionStrategy, Component, computed, Signal, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarType} from "./enums/cartype.enum";
import {ParkingLot} from "./interfaces/parking-lot.interface";
import {Car} from "./interfaces/car.interface";
import {CarLotComponent} from "./car-lot/car-lot.component";

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  imports: [CommonModule, CarLotComponent],
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParkingLotComponent {

  public cars: Signal<Set<Car>> = signal(new Set([
    { id: 1, name: 'Tesla Model S', color: 'White', type: CarType.electric },
    { id: 2, name: 'BMW i3', color: 'Blue', type: CarType.electric },
    { id: 3, name: 'Toyota Prius', color: 'Silver', type: CarType.electric },
    { id: 4, name: 'Nissan Leaf', color: 'Green', type: CarType.electric },
    { id: 5, name: 'Honda Civic', color: 'Red', type: CarType.gas },
    { id: 6, name: 'Ford Mustang', color: 'Yellow', type: CarType.gas },
    { id: 7, name: 'Chevrolet Bolt', color: 'Black', type: CarType.electric },
    { id: 8, name: 'Audi e-tron', color: 'Gray', type: CarType.electric },
    { id: 9, name: 'Mercedes-Benz C-Class', color: 'White', type: CarType.gas },
    { id: 10, name: 'Kia Soul', color: 'Orange', type: CarType.gas },``
  ]));

  public parkingLot = signal(new Map<number, ParkingLot>([
    [1, { type: CarType.electric, car: null }],
    [2, { type: CarType.electric, car: null }],
    [3, { type: CarType.gas, car: null }],
    [4, { type: CarType.gas, car: null }],
    [5, { type: CarType.gas, car: null }],
    [6, { type: CarType.gas, car: null }],
  ]));

  public isParkingFree = computed(() => [...this.parkingLot().values()].find(val => val.car === null) === undefined);
  public remainingParkingLots = computed(() => [...this.parkingLot().values()].filter(val => val.car === null).length);

  constructor() {
  }

  addCarToParkingLot(car: Car) {
    this.parkingLot.mutate((parkingLot) => {
      const firstNullValue = [...parkingLot.values()].find(val => val.car === null && val.type === car.type);
      if (firstNullValue) {
        firstNullValue.car = car;
        this.cars().delete(car);
      }
    })
  }



  removeCarFromParkingLot(lot: number) {
    this.parkingLot.mutate((parkingLot) => {
      const car = parkingLot.get(lot)?.car;
      parkingLot.set(lot, { type: parkingLot.get(lot)?.type!, car: null });
      this.cars().add(car!);
    })
  }

  availableParkingLotsByType(type: CarType | undefined) {
    return [...this.parkingLot().values()].filter(val => val.type === type && val.car === null).length
  }
}

