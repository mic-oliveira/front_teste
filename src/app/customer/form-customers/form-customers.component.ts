import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Select2OptionData} from 'ng-select2';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.scss']
})
export class FormCustomersComponent implements OnInit {
  title = '';
  customer: any = '';
  formValidator: FormGroup;
  statuses = [
    {id: '1', text: 'ACTIVE'}
  ]
  selectedStatus = this.statuses[0]
  constructor(private activateRoute: ActivatedRoute, private service: CustomerService, private form: FormBuilder) {
    this.title = this.activateRoute.snapshot.data.title;
    if (this.activateRoute.snapshot.queryParams.id) {
      this.service.findCustomer(this.activateRoute.snapshot.queryParams.id).subscribe( (x: any) => {
        this.customer = x.data;
      })
    }
  }

  ngOnInit(): void {
  }


  submitCustomer(formControl) {
    console.log(formControl)
  }

  changeDate(event: any) {
    this.customer.birthdate = new Date(event._inputValue);
    console.log(event._inputValue)
  }
}
