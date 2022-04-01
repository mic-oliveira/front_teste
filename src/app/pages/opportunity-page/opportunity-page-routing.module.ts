import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOpportunitiesComponent} from './list-opportunities/list-opportunities.component';

const routes: Routes = [
  {path: '', component: ListOpportunitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityPageRoutingModule { }
