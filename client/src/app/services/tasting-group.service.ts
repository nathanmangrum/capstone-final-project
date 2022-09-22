import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TastingGroupService {
// TODO FOR FRIDAY SEP 23: add all group url's and get service calls up and running for groups, orgs, members

private readonly getAllGroupsUrl = 'https://localhost:8082/api/groups';

constructor() { }

}
