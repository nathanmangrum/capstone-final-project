import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private readonly groupUrl = 'http://localhost:8082/api/groups';

constructor(private readonly http: HttpClient) { }

addMemberToTastingGroup(groupId: number, member: Member): Observable<Member> {
  return this.http.post<Member>(`${this.groupUrl}/${groupId}/members`, member);
}

editMemberInTastingGroup(groupId: number, member: Member): Observable<Member> {
  return this.http.put<Member>(`${this.groupUrl}/${groupId}/members`, member);
}

deleteMemberFromTastingGroup(groupId: number, memberId: string): Observable<Member> {
  return this.http.delete<Member>(`${this.groupUrl}/${groupId}/members/${memberId}`);
}

}
