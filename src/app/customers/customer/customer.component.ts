import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ICustomer} from '../icustomer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customersList: ICustomer[] = [];
  idCustomer = +this.routeActi.snapshot.paramMap.get('id');

  constructor(private customerService: CustomerServiceService,
              private routeActi: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe((data: ICustomer[]) => {
      this.customersList = data;
    });
  }

  deleteCustomer(id) {
    this.customerService.delete(id).subscribe(() => {
      return this.getAll();
    });

  }
}
