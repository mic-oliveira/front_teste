import { Component, OnInit } from '@angular/core';
import {OpportunitiesService} from '../../../dataService/opportunities.service';

@Component({
  selector: 'app-list-opportunities',
  templateUrl: './list-opportunities.component.html',
  styleUrls: ['./list-opportunities.component.scss']
})
export class ListOpportunitiesComponent implements OnInit {
  opportunities: any = null;
  constructor(private service: OpportunitiesService) { }

  ngOnInit(): void {
    this.opportunities = this.getOpportunities();
  }

  getOpportunities() {
    return this.service.listOpportunities().subscribe(x => {
      console.log(x);
    });
  }

}
