import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {addNewItem} from "../../store/shopList.actions";
import {ShopState} from "../../store/shop.store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddItemFormComponent {

  constructor(private store: Store<ShopState>) {
  }

  form = new FormGroup({
    name: new FormControl('' ),
    price: new FormControl(0),
    description: new FormControl('')
  })

  protected onSubmit() {
    this.store.dispatch(addNewItem({
      shopItem: {
        name: this.form.value.name!,
        price: this.form.value.price!,
        description: this.form.value.description!
      }
    }))
  }

}
