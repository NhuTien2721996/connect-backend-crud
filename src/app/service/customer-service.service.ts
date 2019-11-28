import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../customers/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private readonly url = 'http://localhost:8000/api/customers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url);
  }

  add(customer: ICustomer): Observable<ICustomer> {
    return this.http.post <ICustomer>(this.url + '/create', customer);
  }

  delete(id: Observable<ICustomer>): Observable<ICustomer> {
    return this.http.delete<ICustomer>(this.url + '/delete' + '/' + id);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.url + '/' + id);
  }

  update(customer: ICustomer, idCustomer: number): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.url + '/edit' + '/' + idCustomer, customer);
  }
}
