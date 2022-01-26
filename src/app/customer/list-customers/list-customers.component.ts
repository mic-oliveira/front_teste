import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  title = '';
  customers: Observable<any>;

  columns = [
    { prop: 'name' },
    { name: 'Birthdate' },
    { name: 'Company' }
  ];

  constructor(private activateRoute: ActivatedRoute, private service: CustomerService) {
    this.title = this.activateRoute.snapshot.data.title;
    this.loadCustomers();
  }

  ngOnInit(): void {
  }


  private loadCustomers() {
    this.service.listCustomers().subscribe((x: any) => {
      console.log(x);
      this.customers = of(x.data);
    })
  }

}
