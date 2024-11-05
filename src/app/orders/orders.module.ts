import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import {ClrDatagridModule} from "@clr/angular";


@NgModule({
  declarations: [
    OrderDetailComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ClrDatagridModule
  ]
})
export class OrdersModule { }
