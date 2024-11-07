import {Component, OnInit} from '@angular/core';
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
  filterModel: any = {
    perPage: 10,
  };
  pagination: any = {
    page: 1,
    perPage: 10,
    total: 0
  };

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
  }

  getItems() {
    this.orderService.searchOrders(this.filterModel).subscribe(
      (result) => {
        this.orders = result.data;
        this.pagination = {
          ...this.pagination,
          total: result.pagination.total
        };
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refresh(event: any): void {
    console.log(event);
    this.filterModel = {...this.filterModel, page: event.page.current, perPage: event.page.size};
    this.getItems();
  }

  onSubmitSearch() {
    const {search, fromDate, toDate} = this.searchForm.value;
    this.filterModel = {
      page: 1,
      perPage: this.filterModel.perPage,
    };
    if (search) {
      this.filterModel.search = search;
    }
    if (fromDate) {
      this.filterModel.fromDate = fromDate;
    }
    if (toDate) {
      this.filterModel.toDate = toDate;
    }
    this.getItems();
  }

  onDelete() {
    this.orderService.deleteOrderById(this.orderToDelete.id).subscribe(
      (result) => {
        this.showAlert = true;
        this.deleteModalOpen = false;
        this.orderToDelete = null;
        this.getItems();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openDeleteModal(order: any) {
    this.deleteModalOpen = true;
    this.orderToDelete = order;
  }

  closeDeleteModal() {
    this.deleteModalOpen = false;
    this.orderToDelete = null;
  }
}
