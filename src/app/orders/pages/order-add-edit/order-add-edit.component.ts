import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderService} from "../../../core/services/order.service";

@Component({
  selector: 'app-order-add-edit',
  templateUrl: './order-add-edit.component.html',
  styleUrls: ['./order-add-edit.component.scss']
})
export class OrderAddEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      date: [''],
      products: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
