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

  searchOrders(filters: any): Observable<Response<PaginatedResponse<Order>>> {
    let params = new URLSearchParams(filters).toString() ?? '';
    params += params == '' ? "pagination=1" : "&pagination=1";
    return this.http.get<Response<PaginatedResponse<Order>>>(this.apiUrl + '/Search?' + params);
  }
}
