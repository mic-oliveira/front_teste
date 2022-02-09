import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {SweetAlert} from '../../shared/data/sweet-alert';
import {Customer} from '../../models/customer';
import {AddressInterface} from '../../interfaces/address-interface';
import {AddressFormComponent} from '../../components/address-form/address-form.component';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.scss']
})
export class FormCustomersComponent implements OnInit {
  @ViewChild('badgeComponent') badgeComponent;
  @ViewChild('addressFormComponent', {read: AddressFormComponent}) addressForm;
  @ViewChild('selectComponent') select;
  title = '';
  customer: Customer = new Customer();
  customerForm: FormGroup;
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
      this.title = 'Atualizar Cliente';
      this.service.findCustomer(this.activateRoute.snapshot.queryParams.id).subscribe( (x: any) => {
        this.customer = x.data;
        this.selectedStatus = this.customer.status;
      }, () => {}, () => {
        this.createForm();
      })
    }
  }

  ngOnInit(): void {
    this.createForm();
  }


  submitCustomer() {
    this.service.createOrUpdateCustomer(this.customerForm.value, this.customerForm.value.id ?? null).subscribe(x => {
      SweetAlert.success('Usuário criado com sucesso').then();
    }, () => {
      console.log(this.customerForm.value)
      SweetAlert.error('Não foi possível atender solicitação.').then();
    })
  }

  changeDate(event: any) {
    this.customer.birthdate = new Date(event._inputValue);
  }

  createForm() {
    this.customerForm = this.form.group({
      id: [this.customer.id],
      name: [this.customer.name, Validators.required],
      status: [this.customer.status, Validators.required],
      birthdate: [this.customer.birthdate, Validators.required],
      addresses: this.form.array([], Validators.required)
    })
  }

  resetForm() {
    this.addressForm.address = this.customer.addresses[0];
    this.customerForm.reset(this.customer)
    this.selectedStatus = this.customer.status

  }

  changeAddress(addressForm: FormGroup) {
    const address = <FormArray>this.customerForm.controls['addresses'];
    address.clear();
    address.push(addressForm);
  }
}
