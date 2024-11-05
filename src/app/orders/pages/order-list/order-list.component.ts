import {Component, OnInit} from '@angular/core';
import {ClrDatagridStateInterface} from "@clr/angular";
import {OrderService} from "../../../core/services/order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  orders: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.searchOrders({}).subscribe(
      (result) => {
        this.orders = result.data.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  refresh(state: ClrDatagridStateInterface): void {
    console.log("refresh");
  }

  onEdit(user: any) {
    console.log("onEdit");
  }

  onDelete(user: any) {
    console.log("onDelete");
  }
}
