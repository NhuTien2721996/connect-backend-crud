import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', component: CustomerComponent},
  {path: 'customers/create', component: CustomerAddComponent},
  {path: 'customers/:id/edit', component: CustomerEditComponent}
];

@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CustomerModule {
}
