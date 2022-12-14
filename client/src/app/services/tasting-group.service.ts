import { Injectable } from '@angular/core';
import { TastingGroup } from '../models/tasting-group';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TastingGroupService {
// TODO FOR FRIDAY SEP 23: add all group url's and get service calls up and running for groups, orgs, members

private readonly getAllGroupsUrl: string = 'http://localhost:8082/api/groups';
private readonly getGroupByIdUrl = 'http://localhost:8082/api/groups/';
private readonly getGroupByOrgUrl = 'http://localhost:8082/api/groups/byorganization/';
private readonly addGroupUrl = 'http://localhost:8082/api/groups';
private readonly editGroupUrl = 'http://localhost:8082/api/groups';
private readonly deleteGroupUrl = 'http://localhost:8082/api/groups/';

groupById$: Subject<TastingGroup> = new Subject<TastingGroup>();
jsonContentTypeHeaders = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};


constructor(private readonly http: HttpClient) { }

getAllTastingGroups(): Observable<TastingGroup[]> {
  return this.http.get<TastingGroup[]>(this.getAllGroupsUrl);
}

getTastingGroupById(id: number | string) {
  this.http.get<TastingGroup>(this.getGroupByIdUrl + id).subscribe((group) => {
    this.groupById$.next(group);
  })
}

getTastingGroupByOrg<TastingGroup>(orgId: string): Observable<TastingGroup[]> {
  return this.http.get<TastingGroup[]>(this.getGroupByOrgUrl + orgId);
}

addTastingGroup<TastingGroup>(group: TastingGroup): Observable<TastingGroup> {
  return this.http.post<TastingGroup>(this.addGroupUrl, group, this.jsonContentTypeHeaders);
}

editTastingGroup<TastingGroup>(group: TastingGroup): Observable<TastingGroup> {
  return this.http.put<TastingGroup>(this.editGroupUrl, group, this.jsonContentTypeHeaders);
}

deleteTastingGroup<TastingGroup>(id: number): Observable<TastingGroup> {
  return this.http.delete<TastingGroup>(this.deleteGroupUrl + id);
}

}

