import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {FormCustomersComponent} from './form-customers/form-customers.component';
import {SharedModule} from '../shared/shared.module';
import {SearchInputComponent} from '../components/search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerFormComponent} from '../components/customer-form/customer-form.component';
import {NgSelect2Module} from 'ng-select2';
import {NgSelectModule} from '@ng-select/ng-select';
import {StatusBadgeComponent} from '../components/status-badge/status-badge.component';
import {AddressFormComponent} from '../components/address-form/address-form.component';
import {NgxMaskModule} from 'ngx-mask';


@NgModule({
    declarations: [
        ListCustomersComponent,
        FormCustomersComponent,
        SearchInputComponent,
        CustomerFormComponent,
        StatusBadgeComponent,
        AddressFormComponent
    ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module,
    NgSelectModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    DatePipe,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerModule { }
