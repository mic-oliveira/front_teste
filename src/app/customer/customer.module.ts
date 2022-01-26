import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormCustomersComponent } from './form-customers/form-customers.component';
import {SharedModule} from '../shared/shared.module';
import {SearchInputComponent} from '../components/search-input/search-input.component';


@NgModule({
  declarations: [
    ListCustomersComponent,
    FormCustomersComponent,
    SearchInputComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        SharedModule
    ]
})
export class CustomerModule { }
