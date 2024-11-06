import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../core/services/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: any;
  params: any;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.orderService.getOrderById( this.params.id).subscribe(
      (result) => {
        this.order = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
