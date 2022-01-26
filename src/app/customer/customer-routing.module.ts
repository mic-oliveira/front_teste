import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {FormCustomersComponent} from './form-customers/form-customers.component';

const routes: Routes = [
  {
    path: '', component: ListCustomersComponent, data: {title: 'Customers'}
  },
  {
    path: 'create', component: FormCustomersComponent, data: {title: 'Customers'}
  },
  {
    path: 'edit', component: FormCustomersComponent, data: {title: 'Customers'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
