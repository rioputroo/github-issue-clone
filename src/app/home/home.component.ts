import { Component, OnInit } from '@angular/core';

import { IssueService } from '@app/home/issue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  linkHeaders: any;

  repoName = '';
  totalOpenIssues = 0;

  listIssues: Array<any> = [];

  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.isLoading = true;

    this.getRepo();
    this.getIssuesList();
  }

  private getRepo() {
    this.issueService.getRepository().subscribe(result => {
      const repo = result?.body;

      this.repoName = repo.full_name;
      this.totalOpenIssues = repo.open_issues_count;
    })
  }

  private getIssuesList() {
    const page = '1';

    this.issueService.getListIssues(page).subscribe(result => {
      this.listIssues = result?.body.items;

      this.linkHeaders = result?.headers.get('link').split(',');
      console.log('this.linkHeaders', this.linkHeaders.filter((m: string | string[]) => m.includes('rel="next"')));
    })
  }
}
