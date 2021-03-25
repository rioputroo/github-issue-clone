import { Component, OnInit } from '@angular/core';
import { IssueService } from "@app/home/issue.service";

@Component({
  selector: 'app-issue-search',
  templateUrl: './issue-search.component.html',
  styleUrls: ['./issue-search.component.scss']
})
export class IssueSearchComponent implements OnInit {
  queryText = '';

  constructor(private service: IssueService) { }

  ngOnInit(): void {
  }
}
