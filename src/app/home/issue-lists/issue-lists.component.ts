import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IssueService } from '@app/home/issue.service';

@Component({
  selector: 'app-issue-lists',
  templateUrl: './issue-lists.component.html',
  styleUrls: ['./issue-lists.component.scss']
})
export class IssueListsComponent implements OnInit{
  @Input() listIssues: Array<any>;
  @Input() linkHeaders: string;

  issueDetails: any;
  issueLabels: Array<any> = [];
  listMode = true;

  constructor(private service: IssueService) {
  }

  getIssueDetails(id: any) {
    this.listMode = !this.listMode;

    this.service.getIssueDetails(id).subscribe(result => {
      this.issueDetails = result.body;
      this.issueLabels = this.issueDetails.labels;
    })
  }

  backToList() {
    this.listMode = !this.listMode;
  }

  ngOnInit(): void {
    console.log('rio', this.linkHeaders);
  }
}
