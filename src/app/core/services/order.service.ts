import {Injectable} from "@angular/core";
import {environment} from "../../../enviroments/enviroment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

interface Response<T> {
  data: T;
  message: string;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: any;
}

interface Order {
  id: string,
  name: string,
  description: string,
  date: string,
  created_at: string,
  updated_at: string,
  deleted_at: string,
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiUrl + 'Orders';

  constructor(private http: HttpClient) {
  }

  getOrderById(id: number): Observable<Response<Order>> {
    return this.http.get<Response<Order>>(this.apiUrl + '/' + id);
  }

  searchOrders(filters: any): Observable<PaginatedResponse<Order>> {
    let params = new URLSearchParams(filters).toString() ?? '';
    params += params == '' ? "pagination=1" : "&pagination=1";
    return this.http.get<PaginatedResponse<Order>>(this.apiUrl + '/Search?' + params);
  }

  deleteOrderById(id: number): Observable<Response<PaginatedResponse<any>>> {
    return this.http.delete<Response<any>>(this.apiUrl + '/' + id);
  }

  createOrder(data: any) {
    return this.http.post<Response<any>>(this.apiUrl, data);
  }

  updateOrderById(id: number, data: any) {
    return this.http.put<Response<any>>(this.apiUrl + '/' + id, data);
  }
}
