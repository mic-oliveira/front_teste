import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../dataService/customer.service';
import {Observable, of} from 'rxjs';
import {SweetAlert} from '../../shared/data/sweet-alert';
import {TranslateService} from '@ngx-translate/core';
import {translate} from '@angular/localize/tools';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';


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

    this.loadCustomers()
  }

  ngOnInit(): void {
  }

  private loadCustomers() {
    this.service.listCustomers().subscribe((x: any) => {
      console.log(x);
      this.customers = of(x.data);
    })
  }

  removeCustomer(id: string) {
    SweetAlert.confirm('Remove customer',
      'Do you want remove customer permanently?',
      'Confirm',
      'Cancel'
    ).then(alert => {
        if (alert.dismiss) {
          return false;
        }
        this.service.findCustomer(id).subscribe(() => {
          SweetAlert.success('Successful remove user').then();
        }, () => {
          SweetAlert.error('ERROR').then();
        })
    });
  }
}
