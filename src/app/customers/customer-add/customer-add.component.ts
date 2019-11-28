import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../icustomer';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customersList: ICustomer[] = [];
  AddCustomerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required]
  });

  constructor(private customerService: CustomerServiceService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
  }

  create() {
    const data = this.AddCustomerForm.value;
    this.customerService.add(data).subscribe(result => {
      this.route.navigate(['/customers']);
      console.log(data);
    });
  }

  get name() {
    return this.AddCustomerForm.get('name');
  }

  get email() {
    return this.AddCustomerForm.get('email');
  }

  get address() {
    return this.AddCustomerForm.get('address');
  }

}
