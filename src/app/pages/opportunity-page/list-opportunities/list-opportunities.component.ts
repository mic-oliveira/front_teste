import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpportunitiesService} from '../../../dataService/opportunities.service';
import {of, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-opportunities',
  templateUrl: './list-opportunities.component.html',
  styleUrls: ['./list-opportunities.component.scss']
})
export class ListOpportunitiesComponent implements OnInit, OnDestroy {
  opportunities: any[] = [];
  subject = new Subject();
  subscription: Subscription;
  constructor(private service: OpportunitiesService) {
    this.subscription = this.subject.subscribe((value: string) => {
      this.getOpportunities(value);
    })
  }

  ngOnInit(): void {
    this.subject.next(null)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOpportunities(seller_name?: string) {
    return this.service.listOpportunities(seller_name).subscribe((res: any) => {
      console.log(res.data)
      this.opportunities = res.data;
    });
  }

  searchSeller(seller_name?: HTMLInputElement) {
    console.log(seller_name.value)
    this.subject.next(seller_name.value)
  }

}
