import {NgModule} from '@angular/core';

import {OpportunityPageRoutingModule} from './opportunity-page-routing.module';
import {ListOpportunitiesComponent} from './list-opportunities/list-opportunities.component';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {CreateOpportunityModalComponent} from '../../components/create-opportunity-modal/create-opportunity-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListOpportunitiesComponent,
    CreateOpportunityModalComponent
  ],
  imports: [
    BrowserModule,
    OpportunityPageRoutingModule,
    TranslateModule,
    NgbModule,
    FormsModule,
  ]
})
export class OpportunityPageModule { }
