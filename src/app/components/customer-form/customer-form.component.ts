import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit, AfterViewInit {
  @Input() customer: any;
  @Output() formValidators: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  customerForm;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: [this.customer.name, [Validators.required]],
      birthdate: [this.customer.birthdate, [Validators.required]]
    })
    this.customerForm.valueChanges.subscribe(() => {
      this.formValidators.emit(this.customerForm);
    })
  }

  ngAfterViewInit(): void {

  }

  changeDate(event) {
    console.log()
  }

}
