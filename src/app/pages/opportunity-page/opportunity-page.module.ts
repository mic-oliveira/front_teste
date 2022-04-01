import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityPageRoutingModule } from './opportunity-page-routing.module';
import { ListOpportunitiesComponent } from './list-opportunities/list-opportunities.component';


@NgModule({
  declarations: [
    ListOpportunitiesComponent
  ],
  imports: [
    CommonModule,
    OpportunityPageRoutingModule
  ]
})
export class OpportunityPageModule { }
