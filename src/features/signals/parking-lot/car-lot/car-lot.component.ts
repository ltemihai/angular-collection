import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Car} from "../interfaces/car.interface";
import {CarType} from "../enums/cartype.enum";

@Component({
  selector: 'app-car-lot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-lot.component.html',
  styleUrls: ['./car-lot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarLotComponent {

  @Input() car!: Car;
  @Input() lotNumber!: number;
  @Input() parkingLotType!: CarType

  @Output() onCarRemoved = new EventEmitter<number>();
}
