import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListsComponent } from './issue-lists.component';

describe('IssueListsComponent', () => {
  let component: IssueListsComponent;
  let fixture: ComponentFixture<IssueListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
