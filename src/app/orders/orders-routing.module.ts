import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from "./pages/order-list/order-list.component";
import {OrderDetailComponent} from "./pages/order-detail/order-detail.component";
import {OrderAddEditComponent} from "./pages/order-add-edit/order-add-edit.component";

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: 'add',
    component: OrderAddEditComponent
  },
  {
    path: 'edit/:id',
    component: OrderAddEditComponent
  },
  {
    path: ':id',
    component: OrderDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
