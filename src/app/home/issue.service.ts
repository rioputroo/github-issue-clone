import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private BASE_URL = 'https://api.github.com/';

  constructor(private http: HttpClient) {
  }

  getRepository(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.BASE_URL}repos/angular/angular`,
      {observe: 'response', responseType: 'json'});
  }

  getListIssues(page: string, queryParams?: string): Observable<HttpResponse<any>> {
    let params = new HttpParams();
    params = params.append('per_page', '10');
    params = params.append('page', page);

    let q = '';
    if(queryParams) {
      q = '+'+queryParams;
    }

    return this.http.get<any>(`${this.BASE_URL}search/issues?q=repo:angular/angular/node+type:issue+state:open${q}`, {
      observe: 'response',
      params,
      responseType: 'json'
    })
  }

  getIssueDetails(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.BASE_URL}repos/angular/angular/issues/${id}`, {
      observe: 'response',
      responseType: 'json'
    });
  }

}
