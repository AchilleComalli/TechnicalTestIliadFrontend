import {Component, OnInit} from '@angular/core';
import {ClrDatagridStateInterface} from "@clr/angular";
import {OrderService} from "../../../core/services/order.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: any = [];
  deleteModalOpen: boolean = false;
  orderToDelete: any;
  showAlert: boolean = false;
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.searchForm = this.fb.group({
      search: [''],
      fromDate: [''],
      toDate: ['']
    });
  }

  ngOnInit(): void {
    this.getItems({});
  }

  getItems(filters: any) {
    this.orderService.searchOrders(filters).subscribe(
      (result) => {
        this.orders = result.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refresh(state: ClrDatagridStateInterface): void {
    console.log("refresh");
  }

  onEdit(order: any) {
    console.log("onEdit");
  }

  onSubmitSearch() {
    const {search, fromDate, toDate} = this.searchForm.value;
    let filters: any = {};
    if (search) {
      filters.search = search;
    }
    if (fromDate) {
      filters.fromDate = fromDate;
    }
    if (toDate) {
      filters.toDate = toDate;
    }
    this.getItems(filters);
  }

  onDelete() {
    this.orderService.deleteOrderById(this.orderToDelete.id).subscribe(
      (result) => {
        this.showAlert = true;
        this.deleteModalOpen = false;
        this.orderToDelete = null;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openDeleteModal(order: any) {
    this.deleteModalOpen = true;
    this.orderToDelete = order;
    console.log(this.deleteModalOpen, this.orderToDelete);
  }

  closeDeleteModal() {
    this.deleteModalOpen = false;
    this.orderToDelete = null;
  }
}
