import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.scss']
})
export class FormCustomersComponent implements OnInit, AfterViewInit {
  title = '';
  customer: any = '';
  constructor(private activateRoute: ActivatedRoute, private service: CustomerService) {
    this.title = this.activateRoute.snapshot.data.title;
    if (this.activateRoute.snapshot.queryParams.id) {
      this.service.findCustomer(this.activateRoute.snapshot.queryParams.id).subscribe( (x: any) => {
        this.customer = x.data;
      })
    }
  }

  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.queryParams.id)
  }

  ngAfterViewInit(): void {

  }

}
