import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpportunitiesService} from '../../../dataService/opportunities.service';
import {of, Subject, Subscription} from 'rxjs';
import {SweetAlert} from '../../../shared/data/sweet-alert';

@Component({
  selector: 'app-list-opportunities',
  templateUrl: './list-opportunities.component.html',
  styleUrls: ['./list-opportunities.component.scss']
})
export class ListOpportunitiesComponent implements OnInit, OnDestroy {
  opportunities: any[] = [];
  subject = new Subject();
  subscription: Subscription;
  start_date = null;
  seller_name = null;
  constructor(private service: OpportunitiesService) {
    this.subscription = this.subject.subscribe((value: any) => {
      this.getOpportunities(value.seller_name, value.start_date);
    })
  }

  ngOnInit(): void {
    this.subject.next({seller_name: null, start_date: null});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOpportunities(seller_name?: string, start_date?: string) {
    return this.service.listOpportunities(seller_name, start_date).subscribe((res: any) => {
      this.opportunities = res.data;
    });
  }

  search() {
    this.subject.next({seller_name: this.seller_name, start_date: this.start_date});
  }

  approveOpportunity(opportunity) {
    SweetAlert.confirm('Deseja aprovar esta oportunidade?', null, 'SIM', 'Não').then(r => {
      if (r.isConfirmed) {
        this.service.approveOpportunity(opportunity).toPromise().then(() => {
          SweetAlert.success('Oportunidade aprovada.').then(() => {
            this.search();
          })
        })
      }
    })
  }

  refuseOpportunity(opportunity) {
    SweetAlert.confirm('Deseja reprovar esta oportunidade?', null, 'SIM', 'Não').then(r => {
      if (r.isConfirmed) {
        this.service.refuseOpportunity(opportunity).toPromise().then(() => {
          SweetAlert.error('Oportunidade reprovada.').then(() => {
            this.search();
          })
        })
      }
    })
  }

}
