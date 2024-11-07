import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../core/services/order.service";
import * as moment from 'moment';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../core/models/product.models";
import {Order} from "../../../core/models/order.models";

@Component({
  selector: 'app-order-add-edit',
  templateUrl: './order-add-edit.component.html',
  styleUrls: ['./order-add-edit.component.scss']
})
export class OrderAddEditComponent implements OnInit {

  form: FormGroup;
  productsList: Product[] = [];
  params: any;
  isEdit: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      products: [[], Validators.required],
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(
      (result) => {
        this.productsList = result;
      },
      (error) => {
        console.error(error);
      }
    );
    if (this.params.id) {
      this.isEdit = true;
      this.orderService.getOrderById(this.params.id).subscribe(
        (result: Order) => {
          result.date = moment(result.date).format('MM/DD/YYYY');
          this.form.patchValue(result);
          this.loading = false;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.loading = false;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      let body: any = {
        name: this.form.value.name,
        description: this.form.value.description,
        date: moment(this.form.value.date).format('YYYY-MM-DD HH:mm:ss'),
        products: this.form.value.products.map((product: any) => {
          return product.id
        }),
      }
      if (!this.isEdit) {
        this.orderService.createOrder(body).subscribe(
          (result) => {
            this.router.navigate(['/orders/' + result.id])
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        body = {
          id: this.params.id,
          ...body
        };
        this.orderService.updateOrderById(this.params.id, body).subscribe(
          (result) => {
            this.router.navigate(['/orders/' + result.id])
          },
          (error) => {
            console.error(error);
          }
        );
      }

    } else {
      this.form.markAllAsTouched();
    }
  }

}
