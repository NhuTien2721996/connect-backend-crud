import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomer} from '../icustomer';
import {error} from 'util';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  idCustomer = +this.routeActi.snapshot.paramMap.get('id');
  EditCustomerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
    }
  );

  constructor(private customerService: CustomerServiceService,
              private fb: FormBuilder,
              private routeActi: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.customerService.findById(this.idCustomer).subscribe((data: ICustomer) => {
      this.EditCustomerForm.patchValue({
        name: data.name,
        email: data.email,
        address: data.address
      });
    });
  }

  update() {
    const data = this.EditCustomerForm.value;
    this.customerService.update(data, this.idCustomer).subscribe(result => {
      this.route.navigate(['/customers']);
    });
  }

  get name() {
    return this.EditCustomerForm.get('name');
  }

  get email() {
    return this.EditCustomerForm.get('email');
  }

  get address() {
    return this.EditCustomerForm.get('address');
  }

}
