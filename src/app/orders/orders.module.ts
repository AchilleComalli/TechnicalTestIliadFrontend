import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import {ClrAlertModule, ClrDatagridModule, ClrFormsModule, ClrModalModule} from "@clr/angular";
import { OrderAddEditComponent } from './pages/order-add-edit/order-add-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OrderDetailComponent,
    OrderListComponent,
    OrderAddEditComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ClrDatagridModule,
    ClrModalModule,
    ClrAlertModule,
    ReactiveFormsModule,
    ClrFormsModule
  ]
})
export class OrdersModule { }
