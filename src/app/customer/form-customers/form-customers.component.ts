import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {SweetAlert} from '../../shared/data/sweet-alert';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.scss']
})
export class FormCustomersComponent implements OnInit {
  @ViewChild('badgeComponent') badgeComponent;
  @ViewChild('customerForm') customerForm: NgForm;
  @ViewChild('selectComponent') select;
  title = '';
  customer: any = '';
  formValidator: FormGroup;
  statuses = [
    {id: 1, text: 'ACTIVE'},
    {id: 2, text: 'INACTIVE'},
    {id: 3, text: 'BLOCKED'},
    {id: 4, text: 'SUSPENDED'}
  ]
  selectedStatus = 1;
  constructor(private activateRoute: ActivatedRoute, private service: CustomerService, private form: FormBuilder) {
    this.title = this.activateRoute.snapshot.data.title;
    if (this.activateRoute.snapshot.queryParams.id) {
      this.service.findCustomer(this.activateRoute.snapshot.queryParams.id).subscribe( (x: any) => {
        this.customer = x.data;
        this.selectedStatus = this.customer.status;
      })
    }
  }

  ngOnInit(): void {
  }


  submitCustomer(formControl) {
    console.log(formControl.value);
    console.log(this.customer);

    this.service.createOrUpdateCustomer(formControl.value, this.customer.id ?? null).subscribe(x => {
      SweetAlert.success('Usuário criado com sucesso').then();
    }, (error) => {
      console.log(error)
      SweetAlert.error('Não foi possível atender solicitação.').then();
    })
  }

  changeDate(event: any) {
    this.customer.birthdate = new Date(event._inputValue);

  }

  resetForm() {
    this.customerForm.reset(this.customer)
    this.selectedStatus = this.customer.status
  }
}
