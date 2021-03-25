import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-header',
  templateUrl: './issue-header.component.html',
  styleUrls: ['./issue-header.component.scss']
})
export class IssueHeaderComponent implements OnInit {
  @Input() repoName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
