import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ShopListService} from "../../services/shop-list.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-add-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './service-add-item-form.component.html',
  styleUrls: ['./service-add-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceAddItemFormComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private shopListService: ShopListService, private snackBar: MatSnackBar) {

  }

  onSubmit() {
    this.shopListService.addNewItem({
      name: this.form.value.name!,
      price: this.form.value.price!,
      description: this.form.value.description!
    }).subscribe((_) => {
      this.snackBar.open(`Added ${this.form.value.name} to shop`, 'Close', { duration: 3000 })
    });
  }
}
