import {Injectable} from "@angular/core";
import {environment} from "../../../enviroments/enviroment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order.models";

interface PaginatedResponse<T> {
  data: T[];
  pagination: any;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiUrl + 'Orders';

  constructor(private http: HttpClient) {
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + '/' + id);
  }

  searchOrders(filters: any): Observable<PaginatedResponse<Order>> {
    let params = new URLSearchParams(filters).toString() ?? '';
    params += params == '' ? "pagination=1" : "&pagination=1";
    return this.http.get<PaginatedResponse<Order>>(this.apiUrl + '/Search?' + params);
  }

  deleteOrderById(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }

  createOrder(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateOrderById(id: number, data: any) {
    return this.http.put<any>(this.apiUrl + '/' + id, data);
  }
}
