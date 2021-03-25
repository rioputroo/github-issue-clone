import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IssueHeaderComponent } from './issue-header/issue-header.component';
import { IssueSearchComponent } from './issue-search/issue-search.component';
import { IssueStatusComponent } from './issue-status/issue-status.component';
import { IssueListsComponent } from './issue-lists/issue-lists.component';
import { FormsModule } from "@angular/forms";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule,
        FlexLayoutModule,
        MaterialModule,
        HomeRoutingModule,
        FormsModule
    ],
  declarations: [
    HomeComponent,
    IssueHeaderComponent,
    IssueSearchComponent,
    IssueStatusComponent,
    IssueListsComponent,
    PaginationComponent
  ]
})
export class HomeModule { }
